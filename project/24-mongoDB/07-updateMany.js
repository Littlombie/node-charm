// 更新多条数据


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var  whereStr = {'type': 'en'}; //查询条件
    var updateStr = {$set: {'url': 'https:www.runoob.com'}};
    dbo.collection('site').updateMany(whereStr, updateStr, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + ' 条文档被更新'); //result.nModified 为更新的条数
        db.close();
    })
})

// 打开mongo管理工具 mongo.exe -> use runoob -> show tables -> db.site.find().pretty() 查看更新的数据