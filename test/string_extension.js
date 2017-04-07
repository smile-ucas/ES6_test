/**
 * Created by xiaoxiao on 2017/4/5.
 */
// // for...of循环遍历
for( let i of "hello"){
    console.log(i); // h e l l o
}



var s='hello world';
console.log(s.startsWith("hello"));//true   ,以它开头吗
console.log(s.endsWith("d"));//true， 以它结尾吗
console.log(s.includes('lo w'));//true，含有它吗


var s='hello world';
console.log(s.startsWith("hello",1));//false   ,以它开头吗 ,以第一个位置开始
console.log(s.endsWith("d",2));//false， 以它结尾吗,//////////////////////针对前2个字符
console.log(s.includes('lo w',1));//true，含有它吗,以第一个位置开始

 // ////////////////////////////////repeat//////////////////////////////////////////////////////////////////////////////
console.log('hello '.repeat(3));//hello hello hello ,返回新字符串
console.log('hello '.repeat(3.9));//hello hello hello ,小数取整
console.log("hello ".repeat(NaN));//""
console.log("hello ".repeat(-0.2));//""
console.log("hello ".repeat(-1));//当小于等于-1时，就报错   Uncaught RangeError: Invalid count value at String.repeat (native)



//补全 第一个参数是最小长度//////////////////////////////////////////////////////////////////////////////////////////////
console.log('x'.padStart(4,'ac'));//acax

console.log('x'.padEnd(4,'ac'));//xaca
console.log('xxx'.padStart(5));//  xxx         默认用空格补全！！！！！！！！！！
// //模板字符串   用`反问号`     ${这里是可以执行的js代码}/////////////////////////////////////////////////////////////////////////////////////////////////////////
let x= 1,y=2;
console.log(`${x}+${y}=${x+y}`);//1+2=3
















