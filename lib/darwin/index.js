var fs    = require('fs');
var path  = require('path');
var spawn = require('child_process').spawn;

module.exports = function (arch, version, cb) {
	var binary = path.join(__dirname, 'bin', 'wkhtmltopdf');
	var check  = function () {
		if (fs.existsSync(binary)) {
			cb(null, binary);
			return true;
		}
		return false;
	};

	if (check()) return;

	var filename;

	if (arch === 'ia32') {
		filename = 'wkhtmltox-' + version + '_osx-carbon-i386.pkg';
	} else if (arch === 'x64') {
		filename = 'wkhtmltox-' + version + '_osx-cocoa-x86-64.pkg';
	} else {
		return cb('No download for Mac OS X architecture: ' + arch);
	}

	var ps     = spawn(path.join(__dirname, 'download.sh'), [version, filename]);
	var output = '';

	ps.stdout.on('data', function (data) {
		output += data;
	});
	ps.stderr.on('data', function (data) {
		output += data;
	});

	ps.on('close', function (code) {
		if (code !== 0) {
			return cb('Download exited with code: ' + code);
		}

		if ( ! check()) {
			cb('Error downloading wkhtmltopdf binary: ' + output);
		}
	});
};
