var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var flash = require('connect-flash');

var MongoClient = require('mongodb').MongoClient;
var app = express();

var salaries = require('./routes/salaries');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(flash());

app.use('/salaries', salaries);

var server = {
    port: 8080
  };
  
  app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));