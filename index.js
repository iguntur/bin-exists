'use strict';
const cp = require('child_process');

const isWindows = () => process.platform === 'win32';

module.exports = bin => new Promise(resolve => {
	if (isWindows()) {
		cp.exec(`where ${bin}`, err => resolve(!err));
	} else {
		cp.exec(`command -v ${bin}`, err => resolve(!err));
	}
});

module.exports.sync = bin => {
	try {
		const opts = {stdio: 'ignore'};

		if (isWindows()) {
			cp.execSync(`where ${bin}`, opts);
		} else {
			cp.execSync(`command -v ${bin}`, opts);
		}

		return true;
	} catch (err) {
		return false;
	}
};
