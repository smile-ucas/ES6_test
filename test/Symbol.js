/**
 * Created by xiaoxiao on 2017/4/7.
 */
// //保证每个属性的名字都是独一无二，这样就从根本上防止属性名的冲突。
// //新的原始数据类型Symbol，表示独一无二的值。
// //第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

let s=Symbol();
console.log(typeof s);//symbol

//注意，Symbol函数前不能使用new命令，否则会报错!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
let s= new Symbol();//Uncaught TypeError: Symbol is not a constructor at new Symbol (<anonymous>)


let a=Symbol(),b=Symbol();
console.log(a===b);//false

let a=Symbol('hhh'),b=Symbol('hhh');
console.log(a===b);//false
console.log(a);//Symbol(hhh)
console.log(b);//Symbol(hhh)
//Symbol值不能与其他类型的值进行运算，会报错。
// console.log('www'+a);//Uncaught TypeError: Cannot convert a Symbol value to a string
//Symbol值可以显式转为字符串。Symbol值也可以转为布尔值，但是不能转为数值!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(String(a));//Symbol(hhh)
console.log(Boolean(a));//true
console.log(Number(a) );//Uncaught TypeError: Cannot convert a Symbol value to a number




 //在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
let s = Symbol();
let obj = {
    [s]: function (arg) {alert('a') ;}
};
console.log(obj[s](123));



//Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。

//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);//[Symbol(a), Symbol(b)]


//Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
//Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
// 比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。
console.log(Symbol.for("bar") === Symbol.for("bar"));//true
console.log(Symbol('a')===Symbol('a'));//false

//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // foo

var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2));//undefined


//ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。




