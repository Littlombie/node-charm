//  删除多条数据

var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var whereStr = {type: 'en'}; // 查询条件
    dbo.collection('site').deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + ' 条文档被删除');
        db.close();
    })
})

// 打开mongo管理工具 mongo.exe -> use runoob -> show tables -> db.site.find().pretty() 查看删除的数据