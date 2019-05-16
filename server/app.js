
const queryString = require('querystring');
const handleUserRouter = require('./router/user');

// 用于处理post data 
const getPostData = (req) => {
    console.log(req.method);
    const promise = new Promise ((resolve, reject) => {
        // 判断不是post请求
        if (req.method !== 'POST') {
            console.log(1);
            resolve({});
            return;
        }
        console.log(req.headers);
        // if (req.headers['content-type'] !== 'application/json') {
        //     console.log(2);
        //     resolve({});
        //     return;
        // }

        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log(postData);
            if (!postData) {
                resolve({});
                return;
            }
            resolve(
                // JSON.parse(postData)
                queryString.parse(postData)
            )
        })
        
    })
    return promise;
}
const serverHandle = (req, res) => {

    res.setHeader('Content-Type', 'application/json'); // 设置返回格式 JSON
    res.setHeader("Access-Control-Allow-Origin", "*");  // 设置允许跨域    
    res.setHeader("Access-control-Allow-Headers", "xCors");    // 允许请求头中携带 xCors
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"); // 设置允许声明的方法访问

    // 获取 path
    const url = req.url;
    req.path = url.split('?')[0];

    // 解析query
    req.query = queryString.parse(url.split('?')[1]);

    getPostData(req).then(postData => {
        console.log(postData);
        req.body = postData;

        // 处理user路由
        const userData = handleUserRouter(req, res);
        if (userData) {
            res.end (
                JSON.stringify(userData)
            )
        }
        return;
    })
}

module.exports = serverHandle;
