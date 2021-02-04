// console.log(Number('0b111'));
// console.log(Number('0o10'));

// console.log(Number.isFinite(15));
// console.log(Number.isFinite(NaN));

// console.log(Number.isNaN(true));

// console.log(Number.parseFloat('12.345$')); //12.345
// console.log(Number.parseInt('12.345')); //12


// console.log(Number.parseInt === parseInt);

// console.log(Number.isInteger(3 ));
// console.log(Number.isInteger(3.0));
// console.log(Number.isInteger(3.1));

// console.log(Number.EPSILON.toFixed(20));

// function withinErrorMargin(left,right){
//   return Math.abs(left-right)<Number.EPSILON;
// }
// console.log(withinErrorMargin(0.2+0.1,0.3));

// Number.MAX_SAFE_INTEGER === Math.pow(2,53)-1

// console.log(Number.isSafeInteger(3));
// console.log(Number.isSafeInteger(1.2));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));

// for(var i=0;i<5;i++){
//   (function(i){
//     setTimeout(()=>
//       console.log(i),1000*i)
//   })(i)
// }

// function deepClone(obj){
//   let tmp = Array.isArray(obj)?[]:{};
//   if(obj&&typeof obj ==='object'){
//     for(let key in obj){
//       if(obj[key]&&typeof obj[key]==='object'){
//         tmp[key] = deepClone(obj[key]);
//       }
//       else{
//         tmp[key] = obj[key];
//       }
//     }
//   }
//   return tmp;

// }

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

// var x = 'hello';
// x = +x;
// console.log(x);

// var a = function(x){
//   var y = Math.pow(Math.abs(x),1/3);
//   return x>0?y:-y;
// }
// console.log(a(8));