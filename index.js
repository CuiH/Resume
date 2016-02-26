var jade = require('jade');
var YAML = require('yamljs');

var fs = require('fs');
var open = require('open');

var data = YAML.load('data.yml');

var html = jade.renderFile('./index.jade', data);

fs.writeFile(__dirname+'/dist/index.html', html, function(err) {
  if (err) console.log(err);
  open('file://' + __dirname + '/dist/index.html');
});