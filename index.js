'use strict';
const fs = require('fs');
const path = require('path');

const setPlatform = bin => {
	if (process.platform === 'win32') {
		return path.parse(bin).name + '.exe';
	}

	return bin;
};

const envPath = bin => process.env.PATH.split(path.delimiter).map(p => path.join(p, setPlatform(bin)));

module.exports = bin => {
	if (!bin) {
		return;
	}

	let ret = false;

	envPath(bin).forEach(val => {
		if (fs.existsSync(val)) {
			ret = true;
		}

		return;
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

		return;
	});

	return ret;
};
