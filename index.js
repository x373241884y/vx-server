var path = require('path');
var connect = require('connect');
var ecstatic = require('ecstatic');
var proxyLocalJson = require('./lib/proxyLocalJson');
var logger = require('./lib/logger');

module.exports = vxServer;

function vxServer(config) {
var app = connect();
	// var app = express();
	app.use(require('morgan')('dev',{"stream": logger.stream}));
	app.use(ecstatic({
		root: config.root,
		autoIndex: true,
		cache: false
	}));
	app.use(proxyLocalJson({jsonPath: path.join(config.root, 'data')}));
	app.listen(config.port);
	logger.info('vxserver start at http://127.0.0.1:' + config.port);
}

