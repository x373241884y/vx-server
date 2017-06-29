#!/usr/bin/env node

'use strict';
var program = require('commander');
var fs = require('fs');
var path = require('path');
var main = require('../');
var cwd = process.cwd();
program.version('0.0.1')
	.usage('[options] <port|directory>')
	.option('-p,--port <port>', 'set http server port,default [8080]')
	.option('-r,--root <directory>', 'set http server root directory,default current directory')
program.on('--help', function () {
	console.log(' full example : vxserver --port 8080 --root D:\\webapp\static');
	console.log(' please email to x373241884y@email.com');
	console.log(' QQ:373241884');
});
program.parse(process.argv);


function start() {
	var config = {
		port: program.port || 8080,
		root: program.root || cwd
	};
	console.log('using config:\n'+JSON.stringify(config,null,4));
	main(config);
}

start();