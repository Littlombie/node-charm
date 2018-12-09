var  fs = require('fs');

// 异步打开文件
 console.log('准备打开文件');
 fs.open('./project/18-fs/input.txt', 'r+', function (err, fd) {
   if (err) {
     return console.error(err);
   }
   console.log('打开文件成功');
 })

 // fs.stat(path, callback) // path - 文件路径。 callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

 fs.stat('./project/18-fs/input.txt', function (err, stats) {
   console.log(stats.isFile()); //true 如果是文件返回 true，否则返回 false
 })
