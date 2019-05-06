const userData = require('../static/data/user.json');

const userdata = userData;
// console.log('用户名', userdata);

const userController = (username, password) => {
    // console.log( '用户名',username, password, userdata.username,userdata.password);
    if (username === userdata.username && password === userdata.password) {
        return true;
    }
    return false;
}

module.exports = userController;