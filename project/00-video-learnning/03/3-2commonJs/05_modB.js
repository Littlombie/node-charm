
module.exports.mod = 'B';

const modeA = require('./05_modA');

console.log('modB--',modeA.mod);

module.exports.mod = 'BB';