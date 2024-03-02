const { log } = require('console');
const os = require('os')

// infor the current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
   name: os.type(),
   release: os.release(),
   version: os.version(),
   totalMem:os.totalmem()/1024/1024,
   freeMem:os.freemem()/1024/1024,  // convert bytes to Gb
}

console.log(currentOs);