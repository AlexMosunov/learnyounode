/*
const http = require('http')  
const fs = require('fs');
const server = http.createServer = (req, res) => {  
  // обработка запросов  
  res.writeHead(200, {
      'content-type': 'text/plain'
  });
  fs.createReadStream(file).pipe(response);
}
server.listen(process.argv[2])  
*/
/*
var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function callback(request, response) {
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	fs.createReadStream(file).pipe(response);
});
server.listen(portNumber);
*/

'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))