var fs = require('fs');
var data = 'Hello world nodejs';

//创建一个可以写入的流，写入到文件output.txt中
var writeStream = fs.createWriteStream('output.txt');

//使用utf-8编码写入数据
writeStream.write(data, 'UTF-8');

//标记文件末尾
writeStream.end();

//处理留时间-->data, end, and error
writeStream.on('finish', function () {
    console.log('写入完毕');
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});

console.log('程序执行完毕');
