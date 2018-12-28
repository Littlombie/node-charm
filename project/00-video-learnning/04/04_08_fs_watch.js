const fs = require('fs');

fs.watch('./', {
  recursive: true, //是否循环，递归
}, (eventType, filename) => {
  console.log(eventType, filename);
});