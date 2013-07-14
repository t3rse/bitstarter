var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.writeHead(200, {'Content-Type': 'text/html'});  
  var fileContents = fs.readFileSync('index.html');
//  console.log(fileContents.toString('utf-8'));
//  response.send(fileContents.toString('utf-8'));
    response.send("I am OK");
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

