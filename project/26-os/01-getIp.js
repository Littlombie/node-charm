const os = require('os');
const ifaces = os.networkInterfaces();

// console.log(Object.keys(ifaces)[0]);

var obArr = Object.keys(ifaces);
var newArr= [];

let uq = (arr, arr1) => {
    //将arr数组转换成set对象
    setObj = new Set(arr);

	//循环数组arr1，并将值通过add插入set对象中,此时重复数据并不会插入其中
    for (let i = 0; i < arr1.length; i++ ) {
        setObj.add(arr1[i]);
    }
    
    //使用Array.from()方法将set对象转换成数组，并使用sort()方法排序
    return Array.from(setObj).sort();
}

for (let i = 0; i < obArr.length - 1; i++ ) {

    // console.log(i, '--', ifaces[obArr[i]])
    newArr =  uq(ifaces[obArr[i]],ifaces[obArr[i + 1]])
} 

// console.log(newArr);
let newArr2 = [];
for (let i = 0; i < newArr.length; i++) {
    // console.log(ifaces['internal']);
    if (newArr[i].internal == false && newArr[i].family == 'IPv4') {
     newArr2.push(newArr[i].address);
    }
}

// console.log('1111', newArr2);

// export default ipArr = newArr2
exports = module.exports = ipArr = newArr2;
