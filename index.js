var metal = require('metal-name');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.post('/', function(request, response) {
  response.send(metal());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});