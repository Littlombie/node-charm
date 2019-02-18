var http = require('http');

const server = http.createServer();

var config = {
  devServer : {
    host: 'localhost',
    port: '5552'
  }
} 

var questions = [
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

server.get('/list', function (req, res) {
  res.status(200);
  res.json(questions);
});

server.listen(config.devServer.port, function () {
  console.log('Server start!');
});