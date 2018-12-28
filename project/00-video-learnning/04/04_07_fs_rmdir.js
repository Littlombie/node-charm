const fs = require('fs');

fs.rmdir('./project/00-video-learnning/04/test.md/', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('done!');
})