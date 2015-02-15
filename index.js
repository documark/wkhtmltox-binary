var os      = require('os');
var version = require('./package.json')['binary-version'];

// var filenames = {
	// 'mac': {
		// 'ia32': 'wkhtmltox-0.12.2.1_osx-carbon-i386.pkg',
		// 'x64': 'wkhtmltox-0.12.2.1_osx-carbon-x86-64.pkg'
	// },
	// 'debian-wheezy': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-wheezy-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-wheezy-amd64.deb'
	// },
	// 'debian-jessie': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-jessie-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-jessie-amd64.deb'
	// },
	// 'ubuntu-trusty': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-trusty-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-trusty-amd64.deb'
	// },
	// 'ubuntu-precise': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-precise-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-precise-amd64.deb'
	// },
	// 'centos7': {
		// 'x64': 'wkhtmltox-0.12.2.1_linux-centos7-amd64.deb'
	// },
	// 'centos6': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-centos6-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-centos6-amd64.deb'
	// },
	// 'centos5': {
		// 'ia32': 'wkhtmltox-0.12.2.1_linux-centos5-i386.deb',
		// 'x64': 'wkhtmltox-0.12.2.1_linux-centos5-amd64.deb'
	// },
	// 'windows': {
		// 'ia32': 'wkhtmltox-0.12.2.1_mingw-w64-cross-win32.exe',
		// 'x64': 'wkhtmltox-0.12.2.1_mingw-w64-cross-win64.exe'
	// },
// };

module.exports = function (cb) {
	try {
		var platform   = os.platform();
		var downloader = require('./lib/' + platform);
	} catch (e) {
		cb('WKHTMLTOPDF can not be downloaded for your platform (' + platform + '). ' +
			'Please visit http://wkhtmltopdf.org/downloads.html for more information.');
		return;
	}

	downloader(os.arch(), version, cb);
};
