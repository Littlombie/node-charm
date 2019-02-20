var http = require('http');
var url = require('url');


var config = {
  devServer : {
    host: 'localhost',
    port: '5552'
  }
} 

var json = [
  {
  data:213,
  num:444,
  age:12
  },
  {
  data:456,
  num:678,
  age:13
  }];

const server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
  //这里是获取请求的来源:比如访问来源为http://localhost:5552/text.html 会得到/text.html,所以这里可以用pathname来判断来自不同访问来源来做响应操作
  res.writeHead(200, {'Content-type': 'text/html'});
  var url_info = require('url').parse(req.url, true);
  if (pathname == "/list") {
    var post_data = require('querystring').stringify(url_info.query);
    console.log('参数:'+post_data);
    res.writeHead(200, {"Content-Type": "application/json"});
    console.log(JSON.stringify(json));
    res.end(json);
  }
});

// server.get('/list', function (req, res) {
//   res.status(200);
//   res.json(questions);
// });

server.listen(config.devServer.port, function () {
  console.log('Server start! http://localhost:5552/');
});


// //需要下载引用的model
// var http = require('http');
// var url = require('url');

// //创建服务器
// var server = http.createServer(function(req, res) {
//     var pathname = url.parse(req.url).pathname;
//    //这里是获取请求的来源:比如访问来源为http://localhost:443/text.html 会得到/text.html,所以这里可以用pathname来判断来自不同访问来源来做响应操作
//     res.writeHead(200, {'Content-type': 'text/html'});
//     var url_info = require('url').parse(req.url, true);
   
//     if (pathname == "/index.html") {
// //接收get提交过来的参数,自己将对方的数据进行对应操作
// var post_data = require('querystring').stringify(url_info.query);
// console.log('参数:'+post_data);
//        //这里返回json数据
// res.writeHead(200, {"Content-Type": "application/json"});
//         var otherObject = { A1: "a1", B1: "b1" };
//         var otherArray = ["a", "b"];
//         var json = JSON.stringify({
//             anObject: otherObject,
//             anArray: otherArray,
//          });
//         console.log(JSON.stringify(json));
//         res.end(json);
//   });  
//     } else if(pathname=="/text.html") {
//         //返回网页数据
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<head><meta charset="utf-8"/></head>');
//         res.write('<h1>Node.js</h1>');
//         res.write('<b>亲爱的，你慢慢飞，小心前面带刺的玫瑰...</b>');
//         res.end('<p>Hello World</p>');
//     }


// //这个方法可以捕捉POST请求
//     req.addListener('data', function (chunk) {
// //chunk就是对方post提交的参数
//         console.log('post提交数据：' + chunk);
// //进行相应数据操作后,返回数据
// res.writeHead(200, {"Content-Type": "application/json"});
//         var otherObject = { item1: "item1val", item2: "item2val" };
//         var otherArray = ["item1", "item2"];
//         var json = JSON.stringify({
//             anObject: otherObject,
//             anArray: otherArray,
//          });
//         console.log(JSON.stringify(json));
//         res.end(json);
//   });  
//     });
// }).listen(443, function() {
//     console.log('Listening at: http://localhost:443');

// });

