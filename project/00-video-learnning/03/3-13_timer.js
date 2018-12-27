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

// 执行顺序 nextTick -> setTimeout/setInterval -> setImmediate
// nextTick 是把子的的function插入到当前队列的最后一个。
// setImmediate 是放在下个队列的队首，
// setTimeout/setInterval 介于之间