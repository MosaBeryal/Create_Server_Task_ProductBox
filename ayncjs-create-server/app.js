const http = require("http");
const url = require("url");
const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const async = require("async");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === "GET" && pathname === "/I/want/title" && query.address) {
    const addresses = Array.isArray(query.address)
      ? query.address
      : [query.address];

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><head></head><body>");
    res.write("<h1>Following are the titles of given websites:</h1>");
    res.write("<ul>");

    let stopRequests = false;
    const requestFunctions = addresses.map((address) => (callback) => {
      if (stopRequests) {
        callback();
        return;
      }
      const url = address.startsWith("http") ? address : `http://${address}`;
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const dom = new JSDOM(body);
          const title = dom.window.document.querySelector("title").textContent;
          res.write(`<li>${address} - "${title}"</li>`);
        } else {
          res.write(`<li>${address} - NO RESPONSE</li>`);
        }
        callback();
      });
    });

    async.parallel(requestFunctions, (err) => {
      if (!err) {
        res.write("</ul></body></html>");
        res.end();
        stopRequests = true; // Stop making additional requests
      } else {
        res.writeHead(500);
        res.end("Internal Server Error");
      }
    });
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

const port = 7000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
