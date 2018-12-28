const fs = require('fs');

fs.unlink('./project/00-video-learnning/04/04_fs_text.text', err=> {
  if (err) {
    console.log('文件不存在');
    return;
  }
  console.log('done');
});
