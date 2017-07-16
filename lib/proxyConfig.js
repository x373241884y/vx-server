var proxyMiddleware = require('http-proxy-middleware');

module.exports = function (app, config) {
	var proxyConfig = config.proxy;
	if(proxyConfig){
		var proxyTable = proxyConfig.proxyTable;
		if (proxyConfig.enable) {/*启用代理功能*/
			Object.keys(proxyTable).forEach(function (context) {
				var options = proxyTable[context];
				if (typeof options === 'string') {
					options = {target: options}
				}
				options.logLevel = options.logLevel || 'debug';
				app.use(proxyMiddleware(options.filter || context, options));
			});
		}
	}
};