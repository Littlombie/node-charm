// const exports = module.exports;

// (
//   function (exports, require, module, _filename, _dirname) {

//   }
// )

// exports.aaa = 100;
// export 默认会设置为module.export的快捷方式，我们可以给里边添加属性，但是我们不能修改其指向；修改了指向后他就跟对象没有区别了 
module.exports = {
  aaa: 100,
  bbb: 20,
  ccc: function () {
    console.log('ddd');
  }
}

