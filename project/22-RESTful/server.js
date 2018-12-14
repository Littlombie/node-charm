var express = require('express');
var app = express();
var  fs = require('fs');

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// 添加的新用户数据
var user = {
  "user4": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
  }
};

app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

// 显示用户详情
app.get('/:id', function (req, res) {
  // 首先我们读取已存在的用户
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
    data = JSON.parse(data);
    let user = data['user' + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user))
  });
});

// 删除用户
let id = 2;
app.get('/deleteUser', function (req, res) {
  // 首先去读已存在的用户
  fs.readFile(__dirname + '/' + 'users.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    delete data['user' + 2];
    
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().prot;
  

  console.log('应用实例， 访问地址为 http://%s:%s', host, port);
});