(function () {
    var username = Cookies.get('username');
    const [navList,btnLogin] = [
        document.querySelector('.nav-list'),
        document.querySelector('.btn-login')
    ];
    if(username) {
        console.log(1);
        navList.removeChild(btnLogin);
    }
})()