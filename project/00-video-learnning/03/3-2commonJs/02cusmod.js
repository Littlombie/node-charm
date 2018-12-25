console.log('This is a moudle');

const testVar = 100;

function fn () {
  console.log(testVar);
}

module.exports.testVal = testVar;
module.exports.testFn = fn;
