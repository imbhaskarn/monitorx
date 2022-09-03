// const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');
const chalk = require('chalk')

module.exports = () => {
	unhandled();
	console.log(
	chalk.underline.bold.blue(`Monitorx Cli ${pkg.version}\n`)
	)
};
