const fs = require('fs');

fs.mkdir('./project/00-video-learnning/04/test', err=> {
  if (err) {
    conols.loe(err);
    return;
  }
  console.log('done!');
  
})
