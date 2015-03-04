var merge = require('merge');

function error (err) {
	throw new Error('wkhtmltox-binary: ' + err);
}

function Binary (config) {
	this.setConfig(config);
}

/* Configuration */
Binary.prototype.defaults = {
	type: 'pdf',
	cache: true,
	download: true
};

Binary.prototype.setConfig = function (config) {
	if (typeof config !== 'object') {
		config = { version: '' + config };
	}

	this._config = merge(true, this.defaults, config);
};

Binary.prototype.getConfig = function () {
	return this._config;
};

Binary.prototype.getVersion = function () {
	if ( ! this._config.version) {
		error('Version is not specified!');
	}

	return this._config.version;
};

/* Retrieve binary */
Binary.prototype.checkGlobal = function (cb) {
	cb('Not implemented.');
};

Binary.prototype.checkLocal = function (cb) {
	cb('Not implemented.');
};

Binary.prototype.downloadFile = function (cb) {
	cb('Not implemented.');
};

/* Download binary */
Binary.prototype.download = function (cb) {
	if (this.getConfig().cache) {
		this.checkLocal(function (err, path) {
			if (path) return cb(null, path);

			this.checkGlobal(function (err, path) {
				if (path) return cb(null, path);

				this.downloadFile(cb);
			}.bind(this));
		}.bind(this));
	} else {
		this.downloadFile(cb);
	}
};

module.exports = Binary;
