var Binary = require('./lib/binary.js');

module.exports = function (config, cb) {
	var binary = new Binary(config);
	binary.download(cb);
	return binary;
};
