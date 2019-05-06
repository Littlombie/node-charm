const fs = require('fs');
const http = require('http');
const chalk = require('chalk');

const serverHandle = require('../app');
const ipArr = require('../../project/26-os/01-getIp');

let hosts = '';
if (ipArr.length > 0) {
    hosts = ipArr[0];
}


const devWebpackConfig = {
    devServer: {
        'host': 'http://'+hosts,
        'port': '5555'
    }
}
const server = http.createServer(serverHandle);

server.listen(devWebpackConfig.devServer.port, function () {
    console.log(chalk.blue(`Your application is running here: ${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`));
});