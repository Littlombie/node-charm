var fs = require('fs');

//创建一个流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writeStream = fs.createWriteStream('output.txt');

//管道读写操作
// 读取input.txt文件 内容，并将内容写入到output.txt文件中
readerStream.pipe(writeStream);

console.log('程序执行完毕');