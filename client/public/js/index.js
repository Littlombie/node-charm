import newOs from './os.js';
import aa from './aa.js';

const osInfo = newOs(); // 获取主机电脑的信息

var username = Cookies.get('username');
const [navList, btnLogin] = [
    document.querySelector('.nav-list'),
    document.querySelector('.btn-login')
];
if (username) {
    navList.removeChild(btnLogin);
}
const [infoBtn, infoList] = [
    document.querySelector('.info span'),
    document.querySelector('.info-list')
]

let show = false;

infoBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!show) {
        infoList.style.cssText = "display: block";
        osInfo.then(data => {
            // infoList.innerHTML = data;
            infoList.appendChild(data);
        });
        show = true;
    } else {
        infoList.style.cssText = "display: none";
        show = false;
    }
});

document.addEventListener('click', function () {
    if (show) {
        infoList.style.cssText = "display: none";
        show = false;
    }
})