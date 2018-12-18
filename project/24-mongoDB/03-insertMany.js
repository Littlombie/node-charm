var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    var myobj = [
        {name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        {name: 'Google', url: 'https://www.google.com', type: 'en'},
        {name: 'Facebook', url: 'https://www.facebook.com', type: 'en'}
    ];
    dbo.collection('site').insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log('插入文档数量为：' + res.insertedCount); // res.insertedCount 为插入的条数。
        db.close();
    })
})

// 打开mongo.exe 运行 show dbs -> use runoob -> show tables -> bd.site.find() 就可以查看到添加的文档