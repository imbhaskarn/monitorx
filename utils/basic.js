const os = require('os')

const osuser = () =>{
    console.log(os.hostname())
}

const osinfo = () =>{
    console.log({
        type: os.type(),
        userInfo: os.userInfo(),
        release: os.release(),
        version: os.version(),
        platform: os.platform(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        totalCpu: os.cpus().length
    })
}

module.exports = {
    osuser, osinfo
}