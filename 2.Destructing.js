// function f(){
//   console.log('aaa');
//   return 1;
// }

// let [x]=[f()];
// console.log(x);

// var {foo,bar} = { foo:"aaa", bar:"bbb"};
// console.log(foo);
// console.log(bar);

// var {foo:baz} = {foo:"aaa",bar:"bbb"};
// console.log(baz);
// console.log(foo);

// var obj = {
//   p:[
//     "Hello",
//     {y:"World"}
//   ]
// };

// var {p:[x,{y}]} = obj;
// console.log(x);
// console.log(y);

// var x;
// {x} = {x:1};
// console.log(x);

// let {s} = 123;
// console.log(s);

// function add([x,y]){
//   return x+y;
// }
// console.log(add([1,2]));

// var jsonData = {
// 	id:42,
//     status:"OK",
//     data:[867,5309]
// }

// let{id,status,data:number} = jsonData;
// console.log(id,status,number);

// var map = new Map();
// map.set('first','hello');
// map.set('second','world');

// for(let[key,value] of map){
//   console.log(key +" is "+value);
// }

// for(let [key] of map){
//   ...
// }

// for(let [value] of map){
//   ...
// }