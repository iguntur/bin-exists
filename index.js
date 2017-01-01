'use strict';
const childProcess = require('child_process');

module.exports = bin => new Promise(resolve => {
	if (process.platform === 'win32') {
		childProcess.exec(`where ${bin}`, err => resolve(!err));
	} else {
		childProcess.exec(`command -v ${bin}`, err => resolve(!err));
	}
});

module.exports.sync = bin => {
	try {
		const opts = {stdio: 'ignore'};

		if (process.platform === 'win32') {
			childProcess.execSync(`where ${bin}`, opts);
		} else {
			childProcess.execSync(`command -v ${bin}`, opts);
		}

		return true;
	} catch (err) {
		return false;
	}
};
