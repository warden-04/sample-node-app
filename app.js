//Committing a change to test GitHub actions
// app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h2 style="text-align: center;">Hello World</h2>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
