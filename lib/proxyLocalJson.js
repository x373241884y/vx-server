var logger = require('./logger');
var fs = require('fs');
var path = require('path');
function proxyLocalJson(options) {
	return function (req, res, next) {
		var url = req.url;
		if (/^\/local/.test(url)) {
			var localJson = url.replace(/\/local\/(.*?)\.do(\?.*)?$/, '$1.json');
			logger.debug('proxyLocalJson:' + url + '===>data/' + localJson);
			var stream = fs.createReadStream(path.join(options.jsonPath, localJson));
			stream.on('error', function (err) {
				res.end(err.message);
			});
			stream.on('open', function () {
				res.statusCode = 200;
				stream.pipe(res);
			});
		} else {
			next();
		}
	}
}

module.exports = proxyLocalJson;