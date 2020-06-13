// var _ = require("lodash");
// const fs = require('fs');

const http = require('http');
const https = require('https');

var express = require('express');
var app = express();

// Instantiate Servers
const server = http.createServer(app);

app.use(express.static('dist'))

const PORT = process.env.PORT || (process.env.ENV == "prod" ? 80 : 3002);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));

});


server.listen(PORT, () => {
	console.log('HTTP Server running on port '+ PORT);
});
