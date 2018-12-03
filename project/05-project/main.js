var fs = require('fs');

fs.readFile('input.js', {encoding: 'utf-8'}, function (err, data) {
  if (err) { // 如果文件读取失败或者途中出现错误 会执行
    console.log(err.stack);
    return;
  }

  console.log('readFile success');
  return data;
});
console.log('程序执行完毕');
