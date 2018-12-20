// 连接操作 
// mongoDB 不是一个关系型数据库，但我们可以使用 $lookup 来实现左连接。
// 例如我们有两个集合数据分别为：

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo  = db.db('runoob');
    dbo.collection('site3').aggregate([
        {
            $lookup: {
                from: 'site',  // 右集合
                localField: 'name', // 左集合 jion字段
                foreignField: '_id',  // 右集合 jion字段
                as: 'orderdetails' // 新生成字段 （类型array）
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })
})

// 首先得创建两个集合 然后两个集合连接 最后使用 db.site3.find.protty() 来查看site3集合
