var net = require('net');
var client = net.connect({port: 8000}, function () {
  console.log('连接到服务器！');
});

client.on('data', function (data) {
  console.log(data.toString());  
  setTimeout(function () {
    client.end();
  }, 5000);
});

client.on('end', function () {
  console.log('断开与服务器的连接');
});