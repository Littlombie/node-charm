import axios from 'axios';

axios({
  method: 'GET',
  url: '../data/test.json'
}).then( resp => {
  console.log(resp)
}).catch(err => {
  console.log(errr);
})