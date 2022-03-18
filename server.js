const http = require('http');

const hostname = '127.0.0.1';
const port  =  3000;
var PORT = 3000;
const db = require('./db');

db.connectDb();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('why world');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function onRequest(request, response) {
response.writeHead(200, {'Content-type': 'text/html'});
fs.readFile('./index.html', null, function(error, data) {
 if (error) {
   response.writeHead(404);
   response.write('file not found');
 } else {
   response.write(data);
 }
 response.end();
})

}

http.createServer(onRequest).listen(8000);