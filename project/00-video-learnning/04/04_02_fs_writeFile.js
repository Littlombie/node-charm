const fs = require('fs');

const content = Buffer.from('This is a test!');

fs.writeFile('./project/00-video-learnning/04/04_fs_text.md', content, err => {
  if (err) throw err;

console.log('done');
})
// fs.writeFile('./project/00-video-learnning/04/text', 'This i test!', {encoding: 'utf8'}, err => {
//   if (err) throw err;

// console.log('done');
// })
