/**
 * Created by xiaoxiao on 2017/4/5.
 */



//                      注意！
/////  以下是各种小例子，例子与例子间是独立的，在练习时，我都放到了这个js文件中，
//     要测试哪个小例子，需要把其他例子注释掉！！！！


if(true){
    var a=1;//var 定义的有全局和函数局部作用域，没有块级作用域
    let b=2;
}
console.log("a:",a);//1
console.log("b:",b);//报错  test.js:9 Uncaught ReferenceError: b is not defined

//*************************  块作用域的区别 （ES5没有，ES6有）  ******************************
for(var i=0;i<5;i++){
    console.log("i:",i);//0,1,2,3,4
}
console.log("i:",i);//5



    for(let j=0;j<5;j++){
        console.log("j:",j);
    }
    console.log("j:",j);//报错  test.js:20 Uncaught ReferenceError: j is not defined





//f1函数有两个代码块，都声明了变量n，运行后输出5。这表示外层代码块不受内层代码块的影响。如果使用var定义变量n，最后输出的值就是10。
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();


//报错，因为外层作用域无法读取内层作用域的变量
{{{{
    {let insane = 'Hello World'}
    console.log(insane); // test.js:42 Uncaught ReferenceError: insane is not defined
}}}};
{{{{
    let insane = 'Hello World';
    {console.log(insane); }// Hello World 里层作用域可以读外层作用域
}}}};

{{{{
    insane = 'Hello World';
    {console.log(insane); }// Hello World 里层作用域可以读外层作用域
}}}};
console.log(insane);// Hello World


//不报错，因为内层作用域可以定义外层作用域的同名变量
{{{{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}}}};





//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
// IIFE （立即执行函数表达式）写法
(function () {
    var tmp = "111立即执行函数";
    console.log(tmp);
}());
// 块级作用域写法
{
    let tmp = "222ES6的块级作用域";
    console.log(tmp);
}
//一个*提案*，让块级作用域可以变为表达式，也就是说可以返回值，办法就是在块级作用域之前加上do，使它变为do表达式
//本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值
//let x = do {
//   let t = 1;
//   t * t + 1;
//};



//****************************  let更严谨  ES6没有变量提升，有暂时性死区（TDZ） ***************************
var a=1;
function foo(){
    if(false){
        var a=1;
    }
    console.log("a:",a);//undefined 因为变量提升了（ES5）
}
foo();



// let很严谨
console.log("c:",c);//Uncaught ReferenceError: c is not defined
let c=1;




//for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);//输出了3次abc，这表明函数内部的变量i和外部的变量i是分离的
}


//let没有变量提升
function do_something() {
    console.log(foo); // Uncaught ReferenceError: foo is not defined
    let foo = 2;
}
do_something();




//暂时性死区（TDZ）
//暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
if (true) {
    // TDZ开始
    tmp = 'abc';// ReferenceError: tmp is not defined
    console.log(tmp); // ReferenceError: tmp is not defined

    let tmp;
    // TDZ结束




    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}


////////////////////////////////////    不能重复声明变量////////////////////////////////////////////////
// 报错
function foo1() {
    let a = 10;
    var a = 1;
}
foo1();// Uncaught SyntaxError: Identifier 'a' has already been declared

// 报错
function foo2() {
    let a = 10;
    let a = 1;
}
foo2();//Uncaught SyntaxError: Identifier 'a' has already been declared

//不报错
function f1() {
    var n = 5;
    if (true) {
        let n = 10;//因为let有块级作用域
    }
    console.log(n); // 5
}
f1();


//报错
function f1() {
    var n = 5;

    let n = 10;

    console.log(n); // Uncaught SyntaxError: Identifier 'n' has already been declared
}
f1();

//报错
function f1() {
    let n = 5;

    var n = 10;

    console.log(n); // Uncaught SyntaxError: Identifier 'n' has already been declared
}
f1();


//不报错
function f1() {
var n = 5;

var n = 10;

console.log(n); // 10
}
f1();


//报错
function f1() {
    let n = 5;

    let n = 10;

    console.log(n); //Uncaught SyntaxError: Identifier 'n' has already been declared
}
f1();


//报错
function f1() {
    if (true) {
        let n = 10;//因为let有块级作用域
    }
    console.log(n); // Uncaught ReferenceError: n is not defined
}
f1();//test.js:122 Uncaught ReferenceError: n is not defined

//不报错
function f1() {
    var n = 5;
    if (false) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();

//报错
function f1() {
    let n = 5;
    if (false) {
        var n = 10;
    }
    console.log(n);
}
f1();//147 Uncaught SyntaxError: Identifier 'n' has already been declared


//不报错
function f1() {
    if (false) {
        var n = 10;
    }
    console.log(n); //即使不能进入if语句，但var变量提升了，有var n;的声明只是没值，这里输出undefined
}
f1();


//报错
function f1() {
    let n = 5;
    if (true) {
        var n = 10;
    }
    console.log(n);
}
f1();// Uncaught SyntaxError: Identifier 'n' has already been declared



function func1(arg) {
    let arg;
}
func1();//Uncaught SyntaxError: Identifier 'arg' has already been declared

function func2(arg) {
    {
        let arg;
    }
}
func2();// 不报错

