var path = require('path');

 /* 
 normalize join resolve
 extname filename dirname
  */

//格式化路径
console.log('normalization: ' + path.normalize('/test/test1/2slasshes/1slash/tab/..'));

//  连接路径
console.log('joint path: '+ path.join('/test/', 'test1', 'aslashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve: ' + path.resolve('02-path.js'));

// 路径中文件的后缀名
console.log('ext name: ' + path.extname('02-path.js'));

console.log(path.parse('/test/test1/2slasshes/1slash/tab/..'));