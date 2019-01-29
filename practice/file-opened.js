let fs = require('fs');

// 读取文件内的~/topic 替换写入到另外的文件中 
// 异步读取
fs.readFile('./practice/TEST1.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
    let file = data.toString();

    let newFile = file.replace(/~\/topic/g,'/topic');
    console.log(newFile);
    fs.writeFile('./practice/TEST2.txt', newFile, function (err) {
        if (err) {
          return console.error(err);
        }
      
        console.log('数据写入成功！');
    });
 });

