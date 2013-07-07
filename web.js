var fs = require('fs');
var express = require('express');

var readIndexHTML = function()
{
  var data = fs.readFileSync('./index.html', null);
  return data.toString('utf8');
}

//readIndexHTML();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readIndexHTML());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
