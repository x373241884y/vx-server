var path = require('path');
var connnect = require('connect');
var serveStatic = require('serve-static');
var proxyLocalJson = require('./lib/proxyLocalJson');

module.exports = vxServer;

function vxServer(config) {
	var app = connnect();
	app.use(serveStatic(config.root,{
		index:false
	}));
	app.use(proxyLocalJson({jsonPath: path.join(config.root, 'data')}));
	app.listen(config.port);
	console.log('vxserver start at http://127.0.0.1:' + config.port);
}