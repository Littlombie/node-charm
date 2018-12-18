var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var myobj = {name: '菜鸟教程', url: 'www.runoob'};
    dbo.collection('site').insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log('文档插入成功');
        db.close();
    })
})

// 打开mongo.exe 运行 show dbs -> use runoob -> show tables -> bd.site.find() 就可以查看到添加的文档
 