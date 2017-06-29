var winston = require('winston');

var logger = new (winston.Logger)({
	level: 'debug',
	transports: [
		new (winston.transports.Console)({
			colorize: 'all',
			timestamp: function () {
				return "["+new Date().toLocaleString()+"]";
			}
		})
	]
});
logger.stream = {
	write: function(message, encoding){
		logger.info(message.slice(0, -1));
	}
};

module.exports = logger;