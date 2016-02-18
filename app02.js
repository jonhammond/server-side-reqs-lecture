var http = require('http');
var request = require('request');
var port = 8000;


var server = http.createServer(requestHandler);
var userInput = process.argv[2];
var key = 'AIzaSyDzzDsex05qneJ6EjY9bPPwRWy2ELgs7g4';
var url = 'https://www.googleapis.com/urlshortener/v1/url?key=' + key;
// var payload = {"longUrl": userInput};

server.listen(port, function() {
  console.log("Server is running on http://localhost:" + port + "....");
});

var options = {
  url: url,
  headers: {
    'Content-Type': 'application/json'},
  body: {longUrl: userInput},
  json: true
};

function requestHandler (req, res) {
  request.post(options, function(error, response) {
    if (error) {
      console.log('error:', error);
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(response.body));
    }
  });
}

// curl 'https://developers.google.com/url-shortener/v1/' \
//   -H 'Content-Type: application/json' \
//   -d '{"longUrl": "http://www.google.com/"}';




//api key = AIzaSyDzzDsex05qneJ6EjY9bPPwRWy2ELgs7g4
