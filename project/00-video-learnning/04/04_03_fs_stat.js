const fs = require('fs');

fs.stat('./project/00-video-learnning/04/04_fs_stat.js', (err, states) => {
  if (err) {
    console.log('文件不存在');
    return;
  }
  console.log(states.isFile());
  console.log(states.isSymbolicLink());
  console.log(states.isDirectory());

  console.log(states);
})