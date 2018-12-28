const EventEmitter = require('events');

class CustomEvent extends EventEmitter{};

function fn1 () {
  console.log('fn1');
};

function f2 () {
  console.log('f2');
};

const ce = new CustomEvent();

ce.on('test', fn1);
ce.on('test', f2);

setInterval(() => {
  ce.emit('test');
}, 500);

setTimeout(() => {
  // ce.removeListener('test', f2); // 移除 函数 f2
  ce.removeAllListeners('test') // 移除全部事件
}, 1500);
