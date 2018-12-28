console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5,1));
console.log(Buffer.allocUnsafe(5,1));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));

/* 
<Buffer 00 00 00 00 00 00 00 00 00 00>
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
<Buffer 01 01 01 01 01>
<Buffer 00 00 00 00 00>
<Buffer 01 02 03>
<Buffer 74 65 73 74>
<Buffer b5 eb 2d>
*/