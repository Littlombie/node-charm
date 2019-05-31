const os = require('../controller/os');
const {SuccessModel, ErrorModel} = require('../model/resModel');

const handleOs = (req, res) => {
    const method = req.method;
    if (method === 'GET' && req.path === '/api/osInfo') {
        console.log('get data ok');
        const data = os;

        return new SuccessModel(data);
    }
}

exports = module.exports = handleOs;
