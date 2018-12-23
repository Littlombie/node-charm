import axios from 'axios';

// const axios = require('axios');

axios({
  method: 'GET',
  url: '../data/test.json'
}).then( resp => {
  console.log(resp)
}).catch(err => {
  console.log(errr);
})
