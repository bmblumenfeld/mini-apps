
var express = require('express');
var bodyParser = require('body-parser')
var parseHelper = require('./parseHelper.js')
var router = require('./routes.js')
var storage = require('./storage.js')
//middleware


var app = express();
module.exports.app = app
app.use('/',express.static('client'))
app.post('/', bodyParser.json())
app.get,('/history', function (req, res){
  console.log('get got')
  res.send(storage[storage.length-1]);
})
app.post('/', function (req, res){
  var csv = parseHelper(req.body);
  storage.push(csv);
  console.log(storage);
  res.send(csv);	
})
// app.use(router);

app.listen(3000, ()=> console.log('listneing on port 3000'))