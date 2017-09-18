var jade = require('jade');
var YAML = require('yamljs');

var fs = require('fs');
var open = require('open');
var ncp = require('ncp');
rmdir = require('rimraf');

var data = YAML.load('data.yml');

var html = jade.renderFile('./template/index.jade', data);

rmdir(__dirname+'/dist/', function(error){
  if(error) console.error(error);
  fs.mkdirSync(__dirname+'/dist/');
  fs.writeFile(__dirname+'/dist/index.html', html, { flags: 'w' }, function(err) {
    if (err) console.log(err);
    open('file://' + __dirname + '/dist/index.html');
  });

  var src = __dirname + '/themes/' + data.theme;
  var dest = __dirname + '/dist/';

  ncp.limit = 20;

  ncp(src, dest, function(err) {
    if (err) console.error(err);
    console.log('Resume has been generated!');
  });
});


