// This script just reports OS Version, Frontend Version, etc. for the Help tab.
const os = require('os');
document.getElementById('kernelversion').innerHTML+=os.release();
document.getElementById('osversion').innerHTML+='1.0-rolling';
document.getElementById('frontendversion').innerHTML+='1.0';
document.getElementById('cpumodel').innerHTML+=os.cpus()[0].model;
