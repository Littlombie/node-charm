var http = require('http');
var url = require('url');
var api = require('./router/api');
var static = require('./router/static');

// 匹配静态文件夹路径的正则表达式，用于判断请求是否是静态文件
var staticExp = /\/public\/(img/js/css)\/[a-z]*\.(jpg|png|gif|svg|js|css)/;



// https://e.huawei.com/cn/products/enterprise-networking/~/media/EBG/topic-minisite/sdc/style.css