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

const {osuser, osinfo, invalidArg} = require('./utils/basic')

const input = cli.input;
const flags = cli.flags;
const { debug } = flags;

(async () => {
	init({  });
	input.includes(`help`) && cli.showHelp(0);

	if(input.includes('userinfo')){
		osuser()
	}

	if(input.includes('osinfo')){
		return osinfo()
	}
	return invalidArg()
	debug && log(flags);
})();
