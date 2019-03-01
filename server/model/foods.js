var fs = require('fs');

module.exports = function () {
    // 读取文件中的数据，将其转换成功一个对象方便使用
    var data = JSON.parse(fs.readFileSync(__dirname + '/../data/foods.json'));
    var foods = {
        getAllFoods: getAllFoods,
        getFood: getFood
    }

    // 获取所有食品
    function getAllFoods () {
        return data.foods;
    }

    //  根据id获取单个食品
    function getFood (id) {
        for (var i = 0, len = data.foods.length; i < len; i++) {
            if (data.foods[i].id == id) {
                return data.foods[i]
            }
        }
    };

    return foods;
}

