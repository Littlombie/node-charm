const fs = require('fs');

const promisify = require('util').promisify;

const read = promisify(fs.readFile);

read('./project/00-video-learnning/04/04_fs_promisify.js').then(data => {
  console.log(data.toString());
}).catch( ex => {
  console.log(ex);
})


// async function test () {
//   try {
//     const content = await read('./project/00-video-learnning/04/04_fs_promisify.js');
//     console.log(content.toString());
//   } catch (ex) {
//     console.log(ex);
//   };
// }

//   test();