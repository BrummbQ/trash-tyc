var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var engine = require('./lib/engine');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;
mongoose.connect(config.dbConnectionString());

app.get('/api/events', function(req, res) {
	engine.generateEvents(res);
});

app.listen(port);