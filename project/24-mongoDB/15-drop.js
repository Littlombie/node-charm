//  删除集合

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function  (err, db) {
    if (err) throw err;
    var dbo = db.db('runoob');
    // 删除site3集合
    dbo.collection('site3').drop(function (err, delOk) { //执行成功返回 true，否则返回false
        if (err) throw err;
        if (delOk) console.log('集合已删除');
        db.close();
    })
});

// 执行完之后 打开mongo客户端 查看 runoob 库中的 site3 集合是不是被删除了  use runoob -> show tables 
