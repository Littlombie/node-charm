const path = require('path');
const mod = require('./01_cusmod');

console.log(mod.testVar);

/* 
  __dirname ,__filename 总是返回文件的绝对路径

  process.cwd() 总是返回执行node命令所在的文件夹
 */
console.log('__dirname    ',  __dirname);
console.log('process.cwd()', process.cwd());
console.log('./           ', path.resolve('./'));

