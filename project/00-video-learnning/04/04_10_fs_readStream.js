//  stream  表示有方向指向，数据的文件

const fs = require('fs');

const rs = fs.createReadStream('./project/00-video-learnning/04/04_fs_stream.js');

rs.pipe(process.stdout); //逐渐读取