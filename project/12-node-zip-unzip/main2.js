var archiver = require('archiver');
var fs = require('fs');


// 指定文件的打包
// 被打包文件 
var files = [
  './project/node-zip-unzip/a/aa.js'
  ];

var zipPath = './project/node-zip-unzip/test.zip';
// 创建一最终打包文件的输出流 
var output = fs.createWriteStream(zipPath);
// 生成archiver对象，打包类型为zip 
var zipArchiver = archiver('zip');
// 将打包对象与输出流关联 
zipArchiver.pipe(output);
for(var i=0; i < files.length; i++) {
  console.log(files[i]);
  //将被打包文件的流添加进archiver对象中 
  zipArchiver.append(fs.createReadStream(files[i]), {'name': files[i]});
}
//打包 
zipArchiver.finalize();

//https://blog.csdn.net/kongxh_1981/article/details/48975707 
