'use strict';
const fs = require('fs');
const path = require('path');

const envPath = bn => process.env.PATH.split(path.delimiter).map(p => path.join(p, bn));

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
