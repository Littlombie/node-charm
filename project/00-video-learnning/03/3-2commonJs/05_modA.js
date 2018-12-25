module.exports.mod = 'A';

const modeB = require('./05_modB');

console.log('modA--',modeB.mod);

module.exports.mod = 'AA';