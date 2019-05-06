var fs = require('fs');

module.exports = function () {
    // 读取文件中相应的数据，将其转换为一个对象方便其使用
    var data = JSON.parse(fs.readFileSync(__dirname + '/../data/detail.json'));
    var foods = {
        getDetail: getDetail
    };

    // 获取对应id的食品详情

    function getDetail (id) {
        for (var i = 0, len = data.detail.length; i < len; i++) {
            if (data.detail[i].id == id) {
                return data.detail[i];
            }
        }
    }

    return foods;
}