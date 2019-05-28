import os  from './os.js';

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
    const [infoBtn, infoList ] = [
        document.querySelector('.info span'),
        document.querySelector('.info-list')
    ]
    console.log(os);
    let show = false;

    infoBtn.addEventListener('click', function () {
        if (!show) {
            infoList.style.cssText="display: block";
            show = true;
        } else {
            infoList.style.cssText="display: none";
            show = false;
        }
    });
})()