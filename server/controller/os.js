const os = require('os');
const getIp = require('../bin/getIp'); // ip, 网络地址的网络接口. 
const arch = os.arch(); // 方法返回一个字符串, 表明 Node.js 二进制编译所用的 操作系统CPU架构.
const cpus = os.cpus(); // 方法返回一个对象数组, 包含每个逻辑 CPU 内核的信息. 
const homedir = os.homedir(); // 方法以字符串的形式返回当前用户的home目录.
const hostname  = os.hostname(); // 方法以字符串的形式返回操作系统的主机名.
const platform = os.platform(); // 方法返回一个字符串, 指定Node.js编译时的操作系统平台
const release = os.release(); // 方法返回一个字符串, 指定操作系统的发行版.
const tmpdir = os.tmpdir(); // 方法返回一个字符串, 表明操作系统的 默认临时文件目录.
const totalmem = os.totalmem(); // 方法以整数的形式返回所有系统内存的字节数.
const type = os.type(); // 方法返回一个字符串,表明操作系统的名字, 由 uname(3) 返回.举个例子, 'Linux' 在 Linux系统上, 'Darwin' 在 macOS 系统上,'Windows_NT' 在 Windows系统上.


const osInfo = {
    ip: `本机IP-${getIp}`,
    arch: `CPU架构-${arch}`,
    cpus: {
        name: 'CPU',
        cpuslist: cpus
    },
    homedir:`用户的home目录-${homedir}`,
    hostname:`主机名-${hostname}`,
    platform:`操作系统平台-${platform}`,
    release:`系统版本-${release}`,
    tmpdir:`临时文件目录-${tmpdir}`,
    totalmem:`内存-${totalmem}`,
    type:`操作系统-${type === 'Darwin'? 'macOs' : type}`
}

exports = module.exports = osInfo; 