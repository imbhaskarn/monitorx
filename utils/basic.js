const chalk = require('chalk')
const os = require('os')
const child_process = require('child_process');

const osuser = () =>{
    console.log(
        os.userInfo()
    )
}

const osinfo = () =>{
    console.log(chalk.blue(
`Type:    ${ os.type()}          
Release:    ${os.release()}         
Version:    ${os.version()}         
Platform:    ${os.platform()}        
TotalMemory:    ${ os.totalmem()}       
FreeMemory:    ${os.freemem()}          
TotalCpu:    ${os.cpus().length}      
Arch:    ${os.arch()}`)           
)
}
const services = () =>{
    let command = `ps -aux | grep`;
    child_process.exec(command, (err, stdout) => {
        if (err) throw err;
        console.log(stdout);
    });
}
invalidArg = () =>{
    console.log(chalk.red(`Invalid argument name.\nRun monitorx --help or npx monitorx help for help.`))
}
module.exports = {
    osuser, osinfo, services, invalidArg
}