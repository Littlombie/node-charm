
window.onload = function () {
    $.ajax({
        method: 'GET',
        url: '../data/test.json',
        // url:'localhost:5552/list',
        // type: 'json',
        success: function (resp) {
            console.log(resp);
            if (resp) {
                var datas = resp.content;
            }
        },
        fail: function (err) {
            console.log(err);
        }
    });

    function valid(obj) {
        if (obj.value == null || obj.value == '') {
            
            return false;
        }
        return obj.value;
    }

    let [submit, username, password, error] = [
        document.querySelector('#submit'),
        document.querySelector("input[name='username']"),
        document.querySelector("input[name='password']"),
        document.querySelector('.prompt-error')
    ];

    let data = {};
    username.addEventListener('blur', function () {
        console.log(valid(username));
    })
    password.addEventListener('blur', function () {
        console.log(valid(password));
    })
    submit.addEventListener('click', function () {
        data.username = valid(username);
        data.password = valid(password);
        console.log(data);
        $.ajax({
            type:'POST',
            url: 'http://localhost:5555/api/user/login',
            data: data,
            // beforeSend
            success: function (resp) {
                if (resp.errno === 0) {
                    console.log('登录成功！');
                    Cookies.set('username', data.username);
                    window.location.href="/index"
                } else {
                    console.log(resp);
                    error.innerHTML = resp['message'];
                }
            },
            error: function (err) {
                throw err;
            }
        });

    })
};


// function ajax(obj) {
//     var parameter = { //参数的对象。
//         url: obj.url, //地址
//         success: obj.success, //传回来的函数
//         method: obj.method || "GET", //方式
//         name: obj.data || null, //传进的数据
//         bool: obj.bool || true, // boolean值同步异步
//         type: obj.type || "", //数据类型
//         fail: obj.fail || function () {} //失败的函数
//     }
//     var ajax = new XMLHttpRequest(); //声明这个函数
//     if (parameter.method == "GET") { //get方法的传输数据
//         if (parameter.name) {
//             parameter.url += "?" + encodeURI(parameter.data); //传送数据的时候
//         }
//         ajax.open("GET", parameter.url, parameter.bool); //地址传输
//         ajax.send(); //发送
//     } else if (parameter.method == "POST") { //这是post方法
//         ajax.open("post", parameter.url, parameter.bool);
//         ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //传输数据的时候有个请求头的存在。
//         ajax.send(parameter.data); //传输数据
//     }
//     ajax.onload ? ajax.onload = fn : ajax.onreadystatechange = fn; //ie浏览器跟fireFox第一个函数
//     function fn() {
//         if (ajax.readyState == 4) { //状态码
//             if (200 <= ajax.status && ajax.status <= 207) {
//                 var str = (parameter.type == "xml") ? ajax.responseXML : ((parameter.type == "json") ? (new Function("", "return" + ajax.responseText))() : ajax.responseText); //判断数据类型
//                 parameter.success && parameter.success(str);
//             } else { // 出错
//                 parameter.fail && parameter.fail(ajax.status);
//             }
//         }
//     }
// }
// 特别注意的是obj.data数据是name=name&data&data而不是json格式的数据。
