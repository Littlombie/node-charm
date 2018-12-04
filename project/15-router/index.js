var server = require('./server');
var router = require('./router');

server.start(router.route);
console.log(router.aa);
// console.log(router.route);
