// 同步执行完后 执行

setImmediate( () => {
  console.log('setImmediate');
});

setTimeout( () => {
  console.log('timeout');
},0);
process.nextTick ( () => {
  console.log('nextTick');
});