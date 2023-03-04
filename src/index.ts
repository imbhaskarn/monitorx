#!/usr/bin/env ts-node

import {Command} from 'commander';
const program = new Command() 
program
  .command('hi')
  .description('Say hello')
  .option('-c, --color [color]', 'Specify a color')
  .action((name: string, cmd: any) => {
    const color = cmd.color || 'blue';
    console.log(`Hello, ${name}! Your favorite color is ${color}.`);
  });

