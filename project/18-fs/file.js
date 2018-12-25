var fs = require('fs')

// 异步读取
fs.readFile('./project/18-fs/input.txt',  (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('异步读取：' + data.toString()); // 把读取到的二进制内容转成字符串
})

// 同步读取
const data = fs.readFileSync('./project/18-fs/input.txt')
console.log('同步读取：' + data.toString());

console.log('程序执行完毕');