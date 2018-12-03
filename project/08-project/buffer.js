// 创建一个长度为10 、而且用0 补充的Buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为10、且用0x1填充的Buffer
const buf2= Buffer.alloc(10, 1);


// 创建一个长度为10、并且为初始化的Buffer
// 这个方法比调用Buffer.alloc()更快，
// 单反毁的Buffer实力可能包含旧数据、
// 因此需要使用fill()或write()重写
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含[0x1, 0x2, 0x3] 的Buffer
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含utf-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74]的Buffer
const buf5 = Buffer.from('tést');

// 创建一个包含Latin-1字节[0x74, 0xe9, 0x73, 0x74]的Buffer
const buf6 = Buffer.from('tést', 'latin1');


// 写入缓冲区
// 参数描述 string-写入缓冲区的字符串 offset-缓冲区开始写入的索引值，默认为0 length-写入的字节数，默认为buffer.length encoding-使用的编码。默认为‘utf-8’
// buf1.write(string[, offset[, length]][, encoding]);
// 实例
buf = Buffer.alloc(256);
len = buf.write('你好啊');
console.log('写入字节数：' + len);


// 从缓冲区读取数据
// 语法