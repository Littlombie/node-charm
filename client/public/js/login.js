
window.onload = function () {
  ajax({
    method: 'GET',
    url: '../data/test.json',
    type: 'json',
    success: function (resp) {
      console.log(resp);
      if (resp) {
        var datas = resp.content;
        console.log(datas);
      }
    },
    fail: function (err) {
      console.log(err);
    }
  });
  let [submit,username,password] = [
      document.querySelector('#submit'),
      document.querySelector("input['name=username']").value,
      document.querySelector("input['name=password']").value
    ];
  submit.addEventListener('click', function (e) {
    console.log(1,username,password);
    e.preventDefault();
    // if (username == null || username == '') {
    //     console.log('请输入用户名');
    //     return false;
    // }
    // if (password == null || password == '') {
    //     console.log('请输入密码');
    //     return false;
    // }
  })
}


function ajax(obj){
  var parameter = { //参数的对象。
      url:     obj.url, //地址
      success: obj.success, //传回来的函数
      method:  obj.method || "GET", //方式
      name:    obj.data   || null, //传进的数据
      bool:    obj.bool   || true, // boolean值同步异步
      type:    obj.type   || "", //数据类型
      fail:    obj.fail   || function(){} //失败的函数
  }
  var ajax = new XMLHttpRequest(); //声明这个函数
  if (parameter.method == "GET") { //get方法的传输数据
      if (parameter.name) {
          parameter.url += "?" + encodeURI(parameter.data);//传送数据的时候
      }
      ajax.open("GET", parameter.url, parameter.bool); //地址传输
      ajax.send(); //发送
  } else if (parameter.method=="POST"){ //这是post方法
      ajax.open("post", parameter.url, parameter.bool);
      ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //传输数据的时候有个请求头的存在。
      ajax.send(parameter.data); //传输数据
  }
  ajax.onload ? ajax.onload = fn : ajax.onreadystatechange = fn; //ie浏览器跟fireFox第一个函数
  function fn(){
      if (ajax.readyState == 4) { //状态码
          if (200 <= ajax.status && ajax.status <= 207) {
              var str = (parameter.type=="xml") ? ajax.responseXML : ((parameter.type=="json") ? (new Function("", "return"+ajax.responseText))() : ajax.responseText); //判断数据类型
              parameter.success && parameter.success(str);
          }else{ // 出错
              parameter.fail && parameter.fail(ajax.status);
          }
      }
  }
}
// 特别注意的是obj.data数据是name=name&data&data而不是json格式的数据。
