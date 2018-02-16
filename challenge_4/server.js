var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
// var router = require('./routes.js')

var app = express();
module.exports.app = app;
app.use('/',express.static('client/dist'));
app.listen(3000, () => console.log('we didd it!'))

