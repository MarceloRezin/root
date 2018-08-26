
var express = require('express');
var app = express();

const logRequestStart = function(req, res, next)  {
    console.info(req.method + ' ' + req.originalUrl);
    next();
}

app.use(logRequestStart)

app.use(express.static('../public'));

app.get('/teste', function(req, res, next) {
  res.sendFile(__dirname + '/app/teste.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

