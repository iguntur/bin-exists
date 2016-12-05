'use strict';
const fs = require('fs');
const path = require('path');

const envPath = bin => {
	const paths = process.env.PATH.split(path.delimiter);
	let arr = [];

	paths.forEach(p => {
		if (process.platform === 'win32') {
			arr = arr.concat([
				path.join(p, bin),
				path.join(p, bin + '.exe'),
				path.join(p, bin + '.cmd')
			]);
		} else {
			arr = arr.concat([
				path.join(p, bin)
			]);
		}
	});

	return arr;
};

module.exports = bin => {
	if (!bin) {
		return;
	}

	let ret = false;

	envPath(bin).forEach(val => {
		if (fs.existsSync(val)) {
			ret = true;
		}
	});

	return Promise.resolve(ret);
};

module.exports.sync = bin => {
	if (!bin) {
		return;
	}

	let ret = false;

	envPath(bin).forEach(val => {
		if (fs.existsSync(val)) {
			ret = true;
		}
	});

	return ret;
};
