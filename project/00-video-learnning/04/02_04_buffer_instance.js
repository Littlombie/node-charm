/* 
Buffer.from() 
Buffer.allocUnsafe()
Buffer.toString()
Buffer.fill()
Buffer.equals()  // 两个Buffer内容是否相等
Buffer.indexOf()
buf.copy()
 */

 const buf = Buffer.from('This is a test!');
 console.log(buf.length);

 const buf2 = Buffer.allocUnsafe(10);
 buf2[0] = 2;

 console.log(buf2.length);

 console.log(buf.toString('base64'));

 const buf3 = Buffer.allocUnsafe(10);
 console.log(buf3);
 console.log(buf3.fill(10, 2, 6));

 const buf4 = Buffer.from('test');
 const buf5 = Buffer.from('test');
 const buf6 = Buffer.from('test!');

 console.log(buf4.equals(buf5));
 console.log(buf4.equals(buf6));


 console.log(buf4.indexOf('0'));

 /* 
 15
10
VGhpcyBpcyBhIHRlc3Qh
<Buffer f0 77 79 a9 05 02 00 00 01 00>
<Buffer f0 77 0a 0a 0a 0a 00 00 01 00>
true
false
-1
 */