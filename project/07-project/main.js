var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function listener1 () {
  console.log('监听器 listener 执行');
}

//监听器 #2
var listener2 = function listener2 () {
  console.log('监听器 listener2 执行');
}

// 绑定connection 事件，处理函数为listene1
eventEmitter.addListener('connection', listener1);

// 绑定connection 事件， 处理函数为listener2
eventEmitter.on('connection', listener2);

//监听器的个数
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

// 处理connection事件
eventEmitter.emit('connnection');

// 移除绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再监听');

//触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');