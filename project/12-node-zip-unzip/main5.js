var fs = require('fs');
var unzip = require('unzip');

fs.createReadStream('./node_modules.zip').pipe(unzip.Extract({path:'./node_modules'}))
