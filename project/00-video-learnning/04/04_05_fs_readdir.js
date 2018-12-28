const fs = require('fs');

fs.readdir('./project/00-video-learnning/04/', (err, files) => {
  if (err) throw err;

  console.log(files);
})