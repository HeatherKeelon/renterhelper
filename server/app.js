var express  = require('express');
var app      = express();
var path     = require('path');
var port     = process.env.PORT || 5000;
var morgan       = require('morgan');
var bodyParser   = require('body-parser');


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// send down static files
app.use(express.static(__dirname + '/public'));


// routes ======================================================================
require('./routes/routes.js')(app, path); // load our routes and pass in our app. Can do authentication later, too.

// launch ======================================================================
app.listen(port);
console.log('Launching application on port: ' + port);
