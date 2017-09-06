var http = require("http");
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	
	response.end('Hello World\n');
}).listen(8091);

console.log('Server is running at http://localhost:8091');