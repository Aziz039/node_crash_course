const os = require('os');

console.log(os.platform());
// win32
// darwin => mac

// CPU Arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());
