// String.fromCharCode(0x20BB7);
// console.log(String.fromCharCode(0x20BB7));

// var text = String.fromCodePoint(0x20BB7);
// for(let i of text){
//     console.log(i);
// }

// 'abc'.charAt(0)
// console.log('abc'.charAt(0));

// var s = 'Hello world!';
// console.log(s.startsWith('Hello',6));
// console.log(s.endsWith('!',5));
// console.log(s.includes('o',6));

// console.log('x'.repeat(2.9));
// console.log('hello'.repeat(2));
// console.log('na'.repeat(10));

// console.log('x'.padStart(5,'ab'));
// console.log('x'.padEnd(4,'ab'));

// //普通字符串
// console.log(`In JavaScript '\n' is a line-feed`);
// //多行字符串
// console.log(`string text line 1 
// string text line 2`);
// //字符串中嵌入变量
// var name = "Bob" , time = "today";
// console.log(`Hello ${name},how are you ${time}?`);

// var x = 1;
// var y = 2;
// console.log(`${x}+${y} = ${x+y}`);

// function fn(){
// 	return "Hello World";
// }

// console.log(`foo ${fn()} bar`);

// var a = 5;
// var b = 10;
// function tag(s,v1,v2){
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "ok";
// }
// console.log(tag `hello ${a+b} world ${a*b}`);

console.log(String.raw`Hi\n`);

