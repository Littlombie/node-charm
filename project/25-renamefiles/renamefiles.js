var fs = require('fs');

var PATH = './project/25-renamefile/images';

// 便利目录得到文件信息
function walk (path, callback) {
    var files = fs.readdirSync(path);

    files.forEach (function (file) {
        if (fs.statSync(path + "/" + file).isFile) {
            callback (path, file);
        }
    })
}

// 修改文件名称
function rename (oldPath, newPath ) {
    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err;
    });
}

// 运行

walk (PATH, function (path, fileName) {
    var oldPath = path + '/' + fileName, // 源文件目录
        newPath = path + '/' + 'img-' + fileName.replace(/([^\s]*)(-)([^\s.]*)(.\S*$)/, '$3$2$1$4'); //新路径

    rename(oldPath, newPath)
})

