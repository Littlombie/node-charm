const fs = require('fs');


fs.readFile('./project/00-video-learnning/04/04_fs_readfile.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

const data = fs.readFileSync('./project/00-video-learnning/04/01_cusmod.js', 'utf8');

console.log(data);