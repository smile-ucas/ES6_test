/**
 * Created by xiaoxiao on 2017/4/6.
 */
// 为函数参数指定默认值  /////////////////////////////////////////////////////////
function f(x,y='wawawa') {
    console.log(x,y);
}
f('he','');//he
f();//undefined "wawawa"
f('he')//he wawawa


 // 函数的参数是默认声明的，不能在函数体内用let 、const再声明它！！！！！ ///////////////////////////////////////////////////////
 // 如果参数默认值是变量，每次都重新计算默认值表达式的值////////////////////////////////
let a=1;
function f(x=a+1) {
    console.log(x);
}
f();//2
f(20);//20  因为函数参数惰性求值！！！！！！！！
a=5;
f(30);//30  因为函数参数惰性求值！！！！！！！！
f();// 6   因为a变了，所以又要重新计算了

//与解构联系！！！
function f({x,y=1}) {
    console.log(x,y);
}
f({x:100,y:200});//100 200
f();//Uncaught TypeError: Cannot match against 'undefined' or 'null'.

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}
fetch('http://example.com', {});// GET
fetch('http://example.com');//function_extension.js:32 Uncaught TypeError: Cannot match against 'undefined' or 'null'.

function fetch(url, { method = 'GET' } = {}) {
    console.log(method);
}
fetch('http://example.com');//GET


 // 函数的length属性，表示希望得到的参数个数，arguments是实际收到的参数个数
console.log((function (a) {}).length);//1
console.log((function (a=1) {}).length);//0   有默认值的参数不算入length中了！！！！！！！！！1
console.log((function (a=1,b) {}).length); //0 有默认值的参数不算入length中了！后面的 也影响了！
// 如果有默认值的参数不是尾参数（最后的），那后面的参数都不算如length了！！！！！！！1
console.log((function (a,b=1) {}).length);// 1
console.log((function (a,b=1,c,d,e=2) {}).length);// 1


// rest参数，搭配的是数组！！！获取函数多余的参数！rest参数必须是最后一个参数，否则错！就不需要arguments了  ////////////////////////////////////////////////
function add(...values) {
    let sum=0;
    for(var i of values){
        sum+=i;
    }
    console.log(sum);
}
add(1,2,3);//6

//      扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。///////////////////////////////////////
function add(x,y) {
    console.log(x+y);
}
add(...[10,20]);//30

// ...  代替apply，由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。/////////////////////////////////////////////////
// ES5的写法
function f(x, y, z) {
    // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
    // ...
}
var args = [0, 1, 2];
f(...args);


console.log(Math.max.apply(null,[1,2,3]));//3   ES5求max
console.log(Math.max(...[1,2,3]));//3     ES6

var a1=[1,2];
var a2=[3,4]
Array.prototype.push.apply(a1,a2);//ES5
console.log(a1);//[1,2,3,4]

var arr1=[1,2];
var arr2=[3,4];
arr1.push(...arr2);//ES6
console.log(arr1);//[1,2,3,4]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////  扩展运算符应用 ////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var arr1=[1,2];
var arr2=[3,4];
var arr=[...arr1,...arr2];
console.log(arr);//[1,2,3,4]

console.log([...'hello']);//["h", "e", "l", "l", "o"]  把字符串变为数组


 //                从ES5开始，函数内部可以设定为严格模式
//        ES6 规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。  ！！！因为参数代码先于函数体代码执行



  //                函数的name属性  返回函数名   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function f() {

}
console.log(f.name);//f


var f=function () {

}
console.log(f.name);//f


var f;
console.log((f=function a() {

}).name);//a


// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // /////////////////////////////  箭头函数  => 定义函数////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //简化回归函数
// console.log([1,2,3].map(x=>x+x));//[2,4,6]
    //  // 箭头函数说明如下：
// // （1）函数体内的this对象，就是!!!!!!!!!!!!!定义时!!!!!!!所在的对象，而不是使用时所在的对象。
//    // 箭头函数实际上自己没有this，所以它不能做构造函数   所以不能用 call bind apply改变this指向了！！！   箭头函数没有arguments
// //（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// //（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// //（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
// //上面四点中，第一点尤其值得注意。this对象的指向是可变的，   !!!!!!!!!!!!!!!!但是在箭头函数中，它是固定的!!!!!!!!!!!!!!!!!!!!!!!!


// //                   管道机制 （pipeline）:前一个函数的输出是后一个函数的输入
const  a=x=>x+1;
const b=x=>x*2;
console.log(b(a(2)));//6

// //                  尾调用： 某个函数的最后一步是调用另一个函数   不一定写在最后！！但一定是最后一步操作！！！！！
// //                  尾递归：函数尾调用自己                调用帧就是调用记录










