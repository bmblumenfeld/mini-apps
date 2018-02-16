var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
// var router = require('router')

var app = express();
module.exports.app = app;
app.use('/',express.static('client/dist'));
app.get('/', function (req,res){
  res.send(200)	
})
app.listen(3000, () => console.log('we didd it!'))

