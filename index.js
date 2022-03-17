var PORT = process.env.PORT || 5000;
var express = require('express');
var app = epress();

var http = require('http');
var server = http.server(app);

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('the server is running');
  
});

var io = require('socket.io')(server);

