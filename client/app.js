 /* 
 * 1.使用http 服务器与客户局端交互，需要require('http');
 * 声明http协议
  */
const http = require('http');
// 声明文件操作系统对象
const fs = require('fs');
const os = require('os');
const path = require('path');

const ipArr = require('../project/26-os/01-getIp');
// import ipArr from '../project/26-os/01-getIp';
const colors = require('colors');
// const axios = require('axios');

console.log( path.join(__dirname, 'public'),'--', ipArr)

// console.log(os.networkInterfaces());
// console.log(os.networkInterfaces().en0[1].address, '\n', os.cpus()[0].model, '\n', os.freemem(),'\n', os.homedir(), '\n', os.platform(),'\n', os.hostname());

// if (os.networkInterfaces().en0[1].address !=''&& os.networkInterfaces().en0[1].address != undefined) {
//     hosts = os.networkInterfaces().en0[1].address;
// }

// 获取电脑的ip地址
let hosts = '';
if (ipArr.length > 0) {
    hosts = ipArr[0];
}

const oOs = JSON.stringify(os.networkInterfaces()).replace(/\,/g,',\n').replace(/\{/g,'{\n').replace(/\}/g,'}\n');

fs.writeFile('./client/public/json/os.json', oOs, (err) => {
    if (err) {
        throw err;
    }
});
/* 
 2.获取服务器对象
   1.通过http.createServer([requestListener]) 创建一个服务
     requestListener<Function>
     返回：<http.Server>
     返回一个新建的http.Server实例
     对于服务器来说，主要做三件事：
      1.接收客户端发出的请求
      2.处理客户端发来的请求
      3.向客户端发送响应
*/ 
const devWebpackConfig = {
    devServer: {
        'host': 'http://'+hosts,
        'port': '2580'
    }
}

const server = http.createServer();

/* 
  3.声明端口号，开启服务
    server.listen([port][,host][,backlog][,callback])

    port<number>: 端口号
    host<string>: 主机ip
    backlog <number>: server.listen() 函数的通用参数
    callback < Function > server.listen() 函数的通用参数
    Returns <net.Server> 
    启动一个TCP服务坚挺输入的port和host。
    如果port省略或是0，系统会随意分配一个在‘listening’时间出发后能被server.address().port检索的无用端口。
    如果host省略，如果IPv6可用，服务器将会接收基于upspecified IPv6 address (::) 的连接，否则接收基于unspecified IPV4 address（0）
*/
server.listen(devWebpackConfig.devServer.port, function () {
    console.log('Your application is running here: '+(devWebpackConfig.devServer.host+':'+ devWebpackConfig.devServer.port).blue);
});

/* 
 4.给server实例对象添加request请求事件，该请求时间是所有请求的入口
   任何请求都会被触发改事件，然后执行时间对应的处理函数

   server.on('request', function () {
       console.log('收到客户端发出的请求……');
   })
 */

/* 
  5.设置请求处理函数
    请求回掉处理函数需要接受两个参数
    request: request 是一个请求对象，可以拿到当前浏览器请求的一些信息
      eg: 请求路径，请求方法等
    response: response是一个 响应对象，可以用来给请求发送响应
*/

server.on('request', function (request, response) {
    let url = request.url;
    const viewPath = `${__dirname}/views`;
    
    // console.log('lalalala',viewPath+ url,  fs.existsSync(viewPath+ url));
    if (url === '/') {
        // response.writeHead(响应状态码，相应头对象)：发送一个像迎头给请求
        response.writeHead(200, {'Content-Type': 'text/html'})
        // 如果url='/'， 读取指定文件下的html文件，渲染到页面
        fs.readFile(viewPath + '/index.html','utf-8', function (err, data) {
            if (err) throw err;
            response.end(data);
        })
    } else  if ( url  && fs.existsSync(viewPath + url +'.html')) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(viewPath + url+'.html','utf-8', function (err, data) {
            if (err) throw err;
            response.end(data);
        })
    } 
    else if(fs.existsSync(`${__dirname}/public`+url)){ // fs.existsSync 同步检查 文件是否存在
        fs.readFile(`${__dirname}/public`+url, function(err, data) {
            if (err) throw err;
            response.end(data);
        })
    }else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        // 如果 url= '/'， 读取指定文件下的html文件， 渲染到页面
        fs.readFile( viewPath + '/404.html', function(err, data) {
            if (err) throw err;
            response.end(data);
        })
    }
});

// else if (url === '/login') {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 如果url= '/'，读取指定文件下的html文件，渲染到页面
//     fs.readFile( viewPath + '/login.html', 'UTF8', function (err, data) {
//         if (err) throw err;
//         response.end(data);
//     })
// } else if (url === '/index') {
//     response.writeHead(200, {'Content-Type': 'text.html'});
//     // 如果url='/' ，读取指定文件下的html文件，渲染到页面
//     fs.readFile(viewPath + '/index.html','UTF8', function(err, data) {
//         if (err) throw err;
//         response.end(data);
//     })
// }
