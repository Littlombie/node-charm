var fs = require('fs');
var url = require('url');
var queryString = require('querystring');
var foods = require('../model/foods')();
var detail = require('../model/detail')();

var getHeader = {};
var postHeader = {};

//  处理对主页的请求
getHeader['/'] = function (req, res) {
    var foodMenu = '';
    // 拼装首页数据
    var food = foods.getAllFoods();
    for (var i = 0,len = food.length; i < len; i++) {
        foodMenu +='<div class="food-card" id="'+ food[i].id + '"> <img src="' + food[i].image + '"><h1>' + food[i].name + '</h1><h2>' + food[i].price +'</h2></div>';
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/../views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // 动态渲染模板
            res.end(data.toString().replace('{{foodMenu}}', foodMenu));
        }
    });
};

// 处理对详情页的请求
getHeader['/detail'] = function (req, res) {
    var query = queryString.parse(url.parse(req.url).query);
    var foodDetail = detail.getDetail(query.id);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/../views/detail.html', (err, data) => {
        // 动态渲染模板
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data.toString().replace('{{image}}', foodDetail.image)
            .replace('{{name}}', foodDetail.name)
            .replace('{{description}}', foodDetail.description)
            .replace('{{price}}', foodDetail.price));
        };
    });
};

// 404响应，告知客户端资源未找到
getHeader['/404'] = function (req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
};


// post请求的处理方法实例
postHeader['/'] = function (req, res) {
    // do something
}

// get请求
function get(req, res) {
    var reqUrl = url.parse(req.url);
    if (typeof getHeader[reqUrl.pathname] === 'function' ) {
        getHeader[reqUrl.pathname](req,res);
    } else {
        getHeader['/404'](req, res);
    }
}

// post请求（实例）
function post (req, res) {
    var reqUrl = url.parse(req.url);
    if (typeof postHeader[reqUrl.pathname] === 'function') {
        var postData = '';
        req.on('data', (data) => {
            postData +=data;
        });
        req.on('end', () => {
            postData = querystring.parse(postData); // parse这个方法是将一个字符串反序列化为一个对象
            postHeader[reqUrl.pathname](res, postData);
        });
    } else {
        getHeader['/404'](req, res);
    }
}

// 提供给其他模块使用的接口
module.exports = {
    get: get,
    post: post
}