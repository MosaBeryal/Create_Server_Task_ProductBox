# Create_Server_Task_ProductBox

## Web Title Fetcher
This is a Node.js application that creates a server to fetch and display the titles of websites provided in the query string. It provides three implementations using different control flow strategies: plain Node.js callbacks, async.js, and Promises.

## Task Description
The server responds to one route: GET /I/want/title, which expects a list of website addresses in the query string. The server fetches the titles of the websites, renders them in HTML, and sends the HTML response. If the address doesn't respond, it displays "NO RESPONSE."

## Example query:

/I/want/title/?address=google.com&address=www.dawn.com/events/

### Response 
<html>
<head></head>
<body>
    <h1>Following are the titles of given websites:</h1>
    <ul>
        <li>google.com - "Google"</li>
        <li>www.dawn.com/events/ - "Events - DAWN.COM"</li>
    </ul>
</body>
</html>

## Implementations

1. Plain Node.js Callbacks
The first implementation uses plain Node.js callbacks to handle the asynchronous operations. It demonstrates how to manage control flow using callbacks.

2. Async.js
The second implementation utilizes the "async.js" library, which simplifies control flow in an asynchronous environment. It demonstrates how to use the library for more readable and maintainable code.

3. Promises (Using the Q Library)
The third implementation uses Promises with the "Q" library to handle asynchronous operations. It showcases how Promises provide a cleaner way to handle asynchronous tasks, making the code more elegant and readable.

## Usage

git clone --repo--

1. Install project dependencies for each implementation
  . cd asyncjs-create-server
    npm install
  . cd callbacks-create-server
    npm install
  . cd promise-create-server
    npm install
2. Start Server
   npm run dev
3. Access the server at http://localhost:{port}/I/want/title with query string parameters to fetch and display website title
   
## Error Handling
The server handles errors, such as unresponsive websites, and displays "NO RESPONSE" for the affected addresses.

## Author 
Mosa Beryal (MERN Stack Developer)

   


