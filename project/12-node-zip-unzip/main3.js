//文件夹的压缩
var fs = require('fs');
var fstream = require('fstream');
var tar = require('tar');
var zlib = require('zlib');

// ./node_modules/ 为进行压缩的文件夹路径
fstream.Reader({'path': './node_modules/', 'type': 'Directory'})
    .pipe(tar.Pack())
    .pipe(zlib.Gzip())
    .pipe(fstream.Writer({'path': './node_modules/node_modules.tar.gz'}));  // ./node_modules/ 为压缩到的输出路径

