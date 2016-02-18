var http = require('http');
var request = require('request');

var imdbID = process.argv[2];
var url = 'http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json';
var port = 8000;

var server = http.createServer(requestHandler);

function requestHandler (req, res) {
  request(url, function (error, response, body) {
    if (error) {
      res.end('Something went wrong (check the imdb id)');
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      // res.write('<ul><li>'+ imdbID + '<li><ul>');
      res.end(response.body);
    }
  });
}

server.listen(port, function() {
  console.log("Server is running on http://localhost:", port);
});