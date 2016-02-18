var http = require'http';
var imdbID = process.argv[3];
var port = 8000;

var server = http.createServer(requestHandler);

function requestHandler (req, res) {

}

