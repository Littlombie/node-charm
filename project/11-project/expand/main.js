var fs = require('fs');
// var zlib = require('zlib');
var archiver = require('archiver');  //文件夹的解压

var output = fs.createWriteStream('files.zip');
var archive = archiver('zip');

archive.on('error', function (err) {
    
});

fs.createReadStream('files')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('files.gz'));

console.log('执行完毕');