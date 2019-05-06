var fs = require('fs');
var path = require('path');

var MIME = {};
MIME['.js'] = 'text/js';
MIME['.css'] = 'text/css';
MIME['.jpg'] = 'image/jpg';
MIME['.png'] = 'image/png';
MIME['.gif'] = 'image/gif';
MIME['.svg'] = 'image/svg';

function get (pathname, res) {
  if (fs.existsSync(pathname)) { // 检测目录是否存在
    var extname = path.extname(pathname); // 返回文件的扩展名
    res.writeHead(200, {'Content-Type': MIME[extname]});
    fs.readFile(pathname, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        if (isImage(extname)) {
          res.end(data, 'binary'); // 二进制文件加上 binary
        } else {
          res.end(data.toString());
        }
      }
    });
  }
}

function  isImage(extname) {
  if (extname === '.jpg' || extname === '.png' || extname === '.gif' || extname === 'svg') {
    return true;
  } 
  return false;
}

// 提供给其他模块使用的接口
module.exports = {
  get: get
}