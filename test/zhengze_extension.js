/**
 * Created by xiaoxiao on 2017/4/6.
 */
//    ES5中
console.log(new RegExp('xyz','i'));//   /xyz/i
console.log(new RegExp(/xyz/i));  //   /xyz/i



//ES6 允许   第二个参数做修饰符，覆盖第一个参数的正则对象原有的修饰符   //  // flags属性   返回修饰符  ,source返回正文  //////////////////////////////////////////////////////
console.log(new RegExp(/xyz/ig,'i').flags); //i
console.log(new RegExp(/xyz/ig,'i').source); //   xyz
console.log(new RegExp(/xyz/ig,'i')); //   /xyz/i


   //               y 修饰符  和g类似，只是g是从剩余的中（不关心位置）选  而y是从剩余的第一个位置开始选//////////////////////////////////////////////////////
var s="aaa_aa_a";
var r1=/a+/g;
var r2=/a+/y;
console.log(r1.exec(s));  //aaa
console.log(r2.exec(s));   //  aaa
// 之后剩余"_aa_a"
console.log(r1.exec(s));   //aa
console.log(r2.exec(s));  //null

//是否设了y修饰符   用sticky属性判断
var r=/hello/y;
console.log(r.sticky);//true










