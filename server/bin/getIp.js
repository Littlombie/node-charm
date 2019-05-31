const os = require('os');
const ifaces = os.networkInterfaces();

let obArr = Object.keys(ifaces);
let arrs = [];

for (let i = 0; i < obArr.length; i++) {
    for (let x = 0; x < ifaces[obArr[i]].length; x++) {
        arrs.push(ifaces[obArr[i]][x]);
    }
}

let newArr = '';
for (let i = 0; i < arrs.length; i++) {
    if (arrs[i].internal == false && arrs[i].family == 'IPv4') {
        newArr = arrs[i].address;
    }
} 
console.log('ip',newArr);

exports = module.exports = ipArr =  newArr;