const userController = require('../controller/user');
const {SuccessModel, ErrorModel} = require('../model/resModel');

const handleUserRouter = (req, res) => {
    const method = req.method;
    if (method === 'POST' && req.path === '/api/user/login') {
        // console.log(req.body)
        const {username, password} = req.body;
        const result = userController(username, password);
        // console.log('result',result);
        if (result) {
            return new SuccessModel();
        }
        return new ErrorModel('登录失败');
    }
}

module.exports = handleUserRouter;