var  os = require('os');

// 返回操作系统的默认临时文件夹
console.log('tmpdir: ', os.tmpdir());

// 返回CPU的字节序，可能的事‘BE’或‘LE’
console.log('endianness: ', os.endianness());

// 返回操作系统的主机名
console.log('hostname: ', os.hostname());

// 返回操作系统名
console.log('type: ', os.type());

// 返回操作系统名
console.log('platform: ', os.platform());

// 返回操作系统CPU架构，可能的只有‘X64’ 、‘arm’和 ‘ia32’
console.log('arch: ', os.arch());

// 返货操作系统的发行版本
console.log('release: ', os.release());

// 返回操作系统运行的事件，以秒为单位
console.log('uptime: ', os.uptime());

// 返回一个包含1、5、15分钟平均负载的数组
console.log('loadavg: ', os.loadavg());

// 返回操作系统空闲内存量，单位是字节
console.log('freemem: ', os.freemem());

// 返回一个对象数组，包含所安装的每个CPU/内核的信息：型号、速度（单位 MHZ） 、事件（一个包含user、nice、sys、idle和irq所用CPU/ 内核毫秒数的对象）
console.log('cpus: ', os.cpus());

//获得网络接口列表
console.log('networkInterfaces: ', os.networkInterfaces());