/**
 * Created by xiaoxiao on 2017/4/5.
 */
// 报错
//const声明一个只读的常量。一旦声明，常量的值就不能改变。
const PI = 3.1415;
PI // 3.1415

PI = 3;//Uncaught TypeError: Assignment to constant variable.

// 报错
 //const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
const foo;//Uncaught SyntaxError: Missing initializer in const declaration

//////////////////////const 和let 一样，有块级作用域，没有变量提升，有暂时性死区（TDZ），不能重复赋值/////////////////////////////////////
//const有块级作用域  和let很像  const的作用域与let命令相同：只在声明所在的块级作用域内有效。
if (true) {
    const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined



///////////////////////       顶层对象的属性      ///////////////////////////////////////////////////////////////
//顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。ES5之中，顶层对象的属性与全局变量(var和function定义的)是等价的。
window.a = 1;
console.log(a) // 1

b = 2;
console.log(window.b) // 2

var c=3;
console.log(c);//3

//ES6开始，let,class,const定义的全局变量将不和顶层对象挂钩
let d = 1;
console.log(window.d); // undefined