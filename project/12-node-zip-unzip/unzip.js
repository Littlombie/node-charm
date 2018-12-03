var fs = require('fs');
var unzip = require('unzip');

fs.createReadStream('./project/project.zip').pipe(unzip.Extract({ path: './project/project' }));