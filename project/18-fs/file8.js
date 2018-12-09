// 以下为删除文件的语法格式：

// fs.unlink(path, callback)

// 参数
// 参数使用说明如下：
//     path - 文件路径。
//     callback - 回调函数，没有参数。

//实例
// input8.txt 文件内容为：
// site:littlombie.com

var fs = require('fs');

console.log('准备删除文件');
fs.unlink('./project/18-fs/input8.txt', function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('文件删除成功');
})