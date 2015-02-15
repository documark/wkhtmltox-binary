# wkhtmltopdf downloader

Cross-platform downloader for the [wkhtmltopdf][wkhtmltopdf] binary.

### Supported platforms

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

### Usage

1. Install packages: `npm install wkhtmltopdf wkhtmltopdf-downloader --save`

2. Load packages and configure [node-wkhtmltopdf][node-wkhtmltopdf]:

	```js
	var wkhtmltopdf = require('wkhtmltopdf');

	require('wkhtmltopdf-downloader')(function (err, path) {
		if (err) {
			return console.error(err);
		}

		wkhtmltopdf.command = path;
	});
	```

[wkhtmltopdf]: http://wkhtmltopdf.org/
[node-wkhtmltopdf]: https://www.npmjs.com/package/wkhtmltopdf
