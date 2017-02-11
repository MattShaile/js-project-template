var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {
  var allowedOrigins = ['http://mywebsite.com', 'http://www.mywebsite.com', "."];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/', function (req, res) {
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log('App started');
});
