const fs = require('fs');

fs.rename('./project/00-video-learnning/04/04_fs_text.md', './project/00-video-learnning/04/04_fs_text.text', (err) => {
  if (err) throw err;

  console.log('done!');
})