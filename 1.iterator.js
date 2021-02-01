//为一个对象添加Iterator 接口的例子
// let obj = {
//   data:["hello","world"],
//   [Symbol.iterator](){
//     const self= this;
//     let index =0;
//     return {
//       next (){
//         if(index<self.data.length){
//           return {
//             value :self.data[index++],
//             dong : false
//           };
//         }else{
//           return {value :undefined,done:true};
//         }
//       }
//     };
//   }
// };
// for(let item of obj){
//   console.log(item);
// }


//类似数组的对象调用数组的Symbol.iterator方法的例子
// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };

// for (let item of iterable) {
//   console.log(item);
// }

// let generator = function* (){
//   yield 1;
//   yield* [2,3,4];
//   yield 5;
// }
// var iterator = generator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// var someString = 'hell0';
// var iterator = someString[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// const arr = ['red','green','blue'];
// arr.forEach(function(element,index){
//   console.log(element);
//   console.log(index);
// })

// var arr =['a','b','c','d','e'];
// for (let a in arr){
//   console.log(a);// 0 1 2 3 4
// }
// for(let b of arr){
//   console.log(b);//a b c d e
// }

// var cities = new Map();
// cities.set("Beijing", 0);
// cities.set("Shanghai", 1);
// cities.set("Wuhan", 2);

// for (var [name, value] of cities) {
//   console.log(name + ":" + value);
// }

// let arr = ['a','b','c'];
// for(let pair of arr.entries()){
//   console.log(pair);
// }

// let arraylike= {length:2,0:'a',1:'b'};
// for(let x of Array.from(arraylike)){
//   console.log(x);
// }

// for(var key of Object.keys(someObeject)){
//   console.log(key+' : '+someObject[key]);
// }
// var myArray=[1,2,3,4]

// for(var index=0;index<myArray.length;index++){
//   console.log(myArray[index]);
// }

// myArray.forEach(function(value){
//   console.log(value);
// });

// for (var index in myArray){
// 	console.log(myArray[index]);
// }

// for(let value of myArray){
//   console.log(value);
// }