// var fs = require('fs');
// var archiver = require('archiver');
// var path = require('path');

// var archive = archiver('zip');
// var output = fs.createWriteStream(path.join(__dirname, 'a.zip'));
// archive.pipe(output);
// archive.bulk([
//   {
//     src: ['**'],
//     dest: mainItem.path + '/',
//     cwd: path.join(__dirname, 'a/'),
//     expand: true
//   }
// ]);
// archive.finalize();

var fs = require('fs');
var archiver = require('archiver');
var path = require('path');

var archive = archiver('zip');
var output = fs.createWriteStream('node_module.zip');
archive.pipe(output);
// archive.bulk([
//   {
//     src: ['**'],
//     dest: mainItem.path + '/',
//     cwd: path.join(__dirname, 'a/'),
//     expand: true
//   }
// ]);
archive.finalize();