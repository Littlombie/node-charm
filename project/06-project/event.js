var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function (data) {
  console.log('some_event1 事件触发', data);
});
event.on('some_event', function (data) {
  console.log('some_event2 事件触发', data);
})

setTimeout(function () {
  event.emit('some_event', 'this is data');
}, 1000)

