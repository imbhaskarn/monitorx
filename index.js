#!/usr/bin/env node

/**
 * monitorx
 * Simple system monitoring cli package
 *
 * @author Bhaskar <https://github.com/imbhaskarn>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const os = require('os');

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if(input.includes(`os`)){
		console.log(os.hostname())
	}
	debug && log(flags);
})();
