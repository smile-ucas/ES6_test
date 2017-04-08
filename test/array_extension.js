/**
 * Created by xiaoxiao on 2017/4/6.
 */
// // 把类数组对象(必有length，如函数的参数arguments，DOM中的NodeList) 可遍历对象（含ES6的set与map）转换为真正的数组/////////////////////////////////////////////////////////////////
let arryLike={
    '0':'a',
    '1':'b',
    length:2
};
let arry=Array.from(arryLike);
console.log(arry);
console.log(arryLike);


var a=[1,2,3];
var b=0;
a.forEach(function (item,i,a) { //forEach没有返回值
    b=b+item;
});
console.log(b);//6


// 把一组值转换为数组////////////////////////////////
console.log(Array.of(3,1,2).length);//3
console.log(Array.of(3,2,1));//[3,2,1]



 //    数组实例的copyWithin(这里开始替换,开始读取位置，结束位置)，后两个参数可选     改变原数组////////////////////////////////////////////////////////////////////////////////////////
console.log([1,2,3,4,5].copyWithin(2,3)); //[1,2,4,5,5]



//  //   找回第一个，find（）成员   findIndex（）下标  ////////////////////////////////////////////////////////////////////////////////////////
console.log([1,2,3,-1,-2].find(function(item,index,arr){
   return item<0;
}));//-1
console.log([1,2,3,-1,-2].findIndex(function (item,index,arr) {
    return item<0;
}));//  3  这是个下标！！！！


// ///////////          填充数组                 ////////////////////////////////////////////////////////////////////////////////////////
console.log([1,2,3].fill(5));   //  [5,5,5]    会覆盖！！！！！！！！！！！！！！！！
console.log([1,2,3,4,5,6,7,8].fill(100,2,5));//[1, 2, 100, 100, 100, 6, 7, 8]   从下标2开始到下标5-1（前闭后开，和slice一样）都填充数字100
console.log(new Array().fill(5));  //[]   因为它不知道长度！！！
console.log(new Array(3).fill(5));// [5,5,5]


console.log([1,2,3].includes(2));//true


// // ES6 会把空位转为undefined
console.log(Array.from([1,2,,3]));//[1, 2, undefined, 3]












