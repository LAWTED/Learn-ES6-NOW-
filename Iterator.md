# Iterator 

## 简述iterator

### Iterator 的作用

* 为数据结构提供一个统一的、便捷的接口
* 使数据结构的成员能够按照次序排列
* 主要供`for...of`消费

### Iterator 的遍历过程

1. 创建一个指针对象，指向当前数据结构的起始位置
2. 第一次调用指针对象的next方法，指向数据结构的第一个成员
3. 第二次调用指针对象的next方法，指向数据结构的第二个成员
4. 不断调用指针对象的next方法，知道它指向数据结构的结束位置

## 数据结构默认的iterator接口

### 为一个对象添加Iterator 接口的例子

```js
//为一个对象添加Iterator 接口的例子
let obj = {
  data:["hello","world"],
  [Symbol.iterator](){
    const self= this;
    let index =0;
    return {
      next (){
        if(index<self.data.length){
          return {
            value :self.data[index++],
            dong : false
          };
        }else{
          return {value :undefined,done:true};
        }
      }
    };
  }
};

for(let item of obj){
  console.log(item);
}
```



### 类似数组的对象调用数组的Symbol.iterator方法的例子

```js
let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let item of iterable) {
  console.log(item);
}
```

而普通的对象如果部署数组的Symbol.iterator就没有用

```js
let iterable = {
  a: 'a',
  b: 'b',
  b: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let item of iterable) {
  console.log(item);
}
```

**Symbol.iterator一定要返回一个遍历器对象，否则会报错**



有了遍历器接口，数据结构就可以用for..of循环遍历，也可以使用while循环遍历

## 什么时候调用iterator接口

### 解构赋值

```js
let set = new Set().add('a').add('b').add('c');
let[x,y] = set;
console.log(x); //a
console.log(y); //b

let[first,...rest] = set;
console.log(first); //a
console.log(rest);  //['b','c']
```



### 拓展运算符

```js
var str = 'hello'
console.log([...str]); //[ 'h', 'e', 'l', 'l', 'o' ]

let arr = ['b','c'];
console.log(['a',...arr,'d']); //[ 'a', 'b', 'c', 'd' ]
```



### yield*

```js
let generator = function* (){
  yield 1;
  yield* [2,3,4];
  yield 5;
}
var iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//{ value: 1, done: false }
//{ value: 2, done: false }
//{ value: 3, done: false }
//{ value: 4, done: false }
//{ value: 5, done: false }
```

　function*() 是一个函数生成器

　1. 函数生成器特点是函数名前面有一个‘*’
 　2. 通过调用函数生成一个控制器
 　3. 调用next()方法开始执行函数
 　4. 遇到yield函数将暂停
 　5. 再次调用next()继续执行函数



### 其他场合

- for...of
- Array.from()
- Map(),Set(),WeakMap(),WeakSet()
- Promise.all()
- Promise.race()



## 字符串的iterator接口

```js
var someString = 'hell0';
var iterator = someString[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

{ value: 'h', done: false }
{ value: 'e', done: false }
{ value: 'l', done: false }
{ value: 'l', done: false }
{ value: '0', done: false }
{ value: undefined, done: true }
```



## 遍历器对象中的return(),throw()

return()是一个方法，如果for..of循环提前退出，比如出现了break或者continue就会调用return方法，我们可以用return()来清理释放资源

throw()方法一般配合Generator函数使用



## for...of 循环

for...of 循环可以代替数组实例的forEach()方法

```js
const arr = ['red','green','blue'];
arr.forEach(function(element,index){
  console.log(element);
  console.log(index);
})

red
0
green
1
blue
2
```



JavaScript 原有的for...in 循环，只能够获取键名，没法获取键值，而ES6的for...of循环，允许遍历获取键值



```js
var arr =['a','b','c','d','e'];
for (let a in arr){
  console.log(a);// 0 1 2 3 4
}
for(let b of arr){
  console.log(b);//a b c d e
}
```



### Set和Map结构

Set 和Map结构具有iterator接口，直接用for...of循环

```js
var cities = new Set(['Beijing','Wuhan','Chongqin'])
for (var city of cities){
  console.log(city);
}

var cities = new Map();
cities.set("Beijing", 0);
cities.set("Shanghai", 1);
cities.set("Wuhan", 2);
for (var [name, value] of cities) {
  console.log(name + ":" + value);
}
```



三个方法直接可以用的

* entries()返回一个遍历器对象，用来遍历[键名，键值]
* keys()返回一个遍历器对象，用来遍历所有的键名
* values()返回一个遍历器对象，用来遍历所有的键值

```js
let arr = ['a','b','c'];
for(let pair of arr.entries()){
  console.log(pair);
}
```

### 特殊的遍历

#### 类数组

并不是所有的类似数组的对象都具有iterator接口，一个简便的解决方法，就是使用Array.from方法将其转化为数组

```js
let arraylike= {length:2,0:'a',1:'b'};
for(let x of Array.from(arraylike)){
  console.log(x);
}
```



#### 对象

使用`obeject.keys `方法将对象的键名生成一个数组，然后遍历这个数组

```js
for(var key of Object.keys(someObeject)){
  console.log(key+' : '+someObject[key]);
}
```



#### jQuery对象

加上一行：

```
jQuery.prototype[symbol.iterator] = Array.prototype[Symbol.iterator];
```



### 与其他的语法对比

#### 原始写法

```js
for(var index=0;index<myArray.length;index++){
  console.log(myArray[index]);
}
//缺点：麻烦
```

##### forEach写法

```js
myArray.forEach(function(value){
  console.log(value);
});
//缺点：无法中途跳出循环
```

#### for...in 写法

```js
for (var index in myArray){
	console.log(myArray[index]);
}
//缺点：主要是为遍历对象设计的
```

#### for..of 写法✔

```js
for(let value of myArray){
  console.log(value);
}
```

可以使用break

```js
for(var n offibonacci){
	if(>1000)
        break;
    console.log(n);
}
```































