function proxyLocalJson(options) {
	return function (req, res, next) {
		var url = req.url;
		if (/^\/local/.test(url)) {
			var localJson = url.replace(/\/local\/(.*?)\.do(\?.*)?$/, '$1.json');
			console.log('proxyLocalJson:' + url + '===>' + localJson);
			fs.readFile(path.join(options.jsonPath, localJson), 'utf-8', function (err, result) {
				if (err) {
					console.log(err);
					res.status(404).end();
				} else {
					res.send(result);
				}
			});
		} else {
			next();
		}
	}
}

module.exports = proxyLocalJson;