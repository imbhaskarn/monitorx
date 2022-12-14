const meow = require('meow');
const meowHelp = require('cli-meow-help');

const os = require('os')


const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}

};

const commands = {
	help: { desc: `Print help info` },
};

const helpText = meowHelp({
	name: `monitorx`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: true,
	flags
};

module.exports = meow(helpText, options);
