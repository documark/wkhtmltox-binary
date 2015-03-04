# wkhtmltopdf downloader

Cross-platform downloader for the [wkhtmltox][wkhtmltox] binaries.

## Usage

1. Install package: `npm install wkhtmltox-binary --save`.

2. Load package and request specific __wkhtmltopdf__ or __wkhtmltoimage__ version:

	```js
	var binary = require('wkhtmltox-binary');

	binary('0.12.2.1', function (err, path) {
		// path => /path/to/wkhtmltopdf *
	});

	binary(
		{ type: 'image', version: '0.12.2.1' },
		function (err, path) {
			// path => /path/to/wkhtmltoimage *
		}
	);
	```

	__* Executable file.__ This has an `.exe` extension on Windows.

### Use with [`node-wkhtmltopdf`][node-wkhtmltopdf] package:

Download the binary and set is as the compile command:

```js
var wkhtmltopdf = require('wkhtmltopdf');
var binary      = require('wkhtmltox-binary');

binary('0.12.2.1', function (err, path) {
	if (err) throw err;

	wkhtmltopdf.command = path;

	// .. then compile document:
	wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
		.pipe(require('fs').createWriteStream('out.pdf'));
});
```

## Configuration

These are the available configuration options and their defaults:

```js
binary({
	type: 'pdf',
	version: '0.12.2.1', // Has no default, always specify version!
	cache: true,
	download: true,      // Returns error when false and binary is not available.
}, function (err, path) {
	// err instanceof Error
	// typeof path === 'string'
});
```

## Supported platforms

- [ ] Mac OS X (32bit, Darwin)
- [ ] Mac OS X (64bit, Darwin)
- [ ] Windows XP or later (32bit)
- [ ] Windows XP or later (64bit)
- [ ] Debian Wheezy (32bit)
- [ ] Debian Wheezy (64bit)
- [ ] Debian Jessie (32bit)
- [ ] Debian Jessie (64bit)
- [ ] Ubuntu Trusty (32bit)
- [ ] Ubuntu Trusty (64bit)
- [ ] Ubuntu Precise (32bit)
- [ ] Ubuntu Precise (64bit)
- [ ] CentOS 7 (64bit)
- [ ] CentOS 6 (32bit)
- [ ] CentOS 6 (64bit)
- [ ] CentOS 5 (32bit)
- [ ] CentOS 5 (64bit)

[wkhtmltox]: http://wkhtmltopdf.org/
[node-wkhtmltopdf]: https://www.npmjs.com/package/wkhtmltopdf
