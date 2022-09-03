#!/usr/bin/env node

/**
 * monitorx
 * Simple system monitoring package
 *
 * @author Bhaskar <https://github.com/imbhaskarn>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const {osuser, osinfo} = require('./utils/basic')

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if(input.includes('osuser')){
		osuser()
	}

	if(input.includes('osinfo')){
		osinfo()
	}

	debug && log(flags);
})();
