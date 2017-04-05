
//    /////////   数组的解构   //////////////////////
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo); // 1
// console.log(bar); // 2
// console.log(baz); // 3

// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third); // "baz"

// let [x, , y] = [1, 2, 3];
// console.log(x); // 1
// console.log(y); // 3

// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head); // 1
// console.log(tail); // [2, 3, 4]

// let [a, b, ...c] = ['a'];
// console.log(a);// "a"
// console.log(b); // undefined
// console.log(c); // []


// let [foo] = [];
// console.log(foo);// undefined


// let [bar, foo] = [1];
// console.log(bar);//1
// console.log(foo);//undefined


// let [a,b]=[1,2,3];
// console.log(a);//1
// console.log(b);//2

// let [a,[[b]],c]=[1,[[2,3]],4];
// console.log(a);//1
// console.log(b);//2
// console.log(c);//4

// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};



//
// let [x, y, z] = new Set(['a', 'b', 'c']);
// console.log(x);//a


// let [foo=true]=[];
// console.log(foo);//true

// let [x,y='b']=['a'];
// console.log(x);//a
// console.log(y);//b

// let [x=1]=[undefined];
// console.log(x);//1

// let [x=1]=[null];
// console.log(x);//null

// let [x="hhh"]=["aaaaa"];
// console.log(x);//aaaaa


// function f() {
//     console.log('aaa');
// }
// let [x = f()] = [1];
// console.log(x);//1,因为x能取到值1，x=f（）是惰性求值的表达式

// let [x=1,y=x]=[];
// console.log(x);//1
// console.log(y);//1

// let [x=1,y=x]=[2];
// console.log(x);//2
// console.log(y);//2

// let [x=1,y=x]=[3,4];
// console.log(x);//3
// console.log(y);//4

////////注意！！！！！ y开始没有值，但x能取到2
// let [x=y,y=1]=[2,3];
// console.log(x);//2
// console.log(y);//3


// //报错
// let [x=y,y=2]=[]; //Uncaught ReferenceError: y is not defined
// console.log(x);
// console.log(y);


//   //////////    ////////////////////////////////////////////////对象的解构 /////////////////////
// let {foo,bar}={foo:"a",bar:"b"};
// console.log(foo);//a
// console.log(bar);//b

//  //变量与属性同名才能取到值
// let {baz}={foo:"a",bar:"b"};
// console.log(baz);//undefined

// //这种写法，foo只是模式，不是变量,baz才是变量
// var {foo:baz}={foo:1,bar:2};
// console.log(foo);//Uncaught ReferenceError: foo is not defined

// var {foo:baz}={foo:1,bar:2};
// console.log(baz);//1

// var {foo:baz}={f:1,bar:2};
// console.log(baz);//undefined

// //解构嵌套结构的对象
// let obj={
//     p:[
//         'hhh',
//         {y:'ooo'}
//     ]
// };
// let {p:[x,{z:l}]}=obj;
// console.log(x);//hhh
// console.log(l);//undefined

// let obj={
//     p:[
//         'hhh',
//         {y:'ooo'}
//     ]
// };
// let {p:[x,{y:z}]}=obj;
// console.log(x);//hhh
// console.log(z);//ooo

// let obj={
//     p:[
//         'hhh',
//         {y:'ooo'}
//     ]
// };
// let {p:[x,{y:z}]}=obj;
// console.log(x);//hhh
// console.log(y);//Uncaught ReferenceError: y is not defined


// let obj={
//     p:[
//         'hhh',
//         {y:'ooo'}
//     ]
// };
// let {p:[x,{y}]}=obj;
// console.log(x);//hhh
// console.log(y);//ooo
// console.log(p);//Uncaught ReferenceError: p is not defined,因为p只是模式，不是变量，所以p不会被赋值

// let obj = {};
// let arr = [];
//
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
// console.log(obj);//{prop:123}
// console.log(arr);//[true]

//  ///////////////////////////////////////对象的解构也可以有默认值 ///////////////////////////////////
// var {x=2}={};
// console.log(x);//2

// var {x=1,y=2}={x:3};
// console.log(x);//3


// let {x:y=1}={}
// console.log(y);//1

// let {x:y=1}={x:3}
// console.log(y);//3

// let {x:y=1}={x:undefined}
// console.log(y);//1


//  // Math是对象，直接用
// let {log,sin,cos}=Math;
// console.log(log);
// console.log(sin);
// console.log(cos);

//   // //数组是特殊的对象，可以吧数组进行对象属性的解构
// let arr=[1,2,3]
// let {0:a,1:b}=arr;
// console.log(a);//1
// console.log(b);//2


// //                       ///////////////////////////// 字符串的解构赋值 （字符串被转换成了类数组的对象）///////////////////////////////////
// const [a,b,c]='hel';
// console.log(b);//e

// let {length:len}='heoo';//因为类数组对象有length属性
// console.log(len);//4



// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                       ///////////////////////////// 解构的用途 ////////////////////////////////////////////////
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //交换变量的值
// let x=1,y=2;
// [x,y]=[y,x];
// console.log(x);//2
// console.log(y);//1


// //从函数中返回多个值
// function fun1() {
//     return [1,2,3];
// }
// let [a,y,x]=fun1();
// console.log(y);//2

// function  fun2() {
//     return{
//         a:1,
//         b:2
//     }
// }
// let {a,b}=fun2();
// console.log(b);//2


// function f1[x,y,z]) {...}
// f1([1,2,3]);
//
// function f2({b,c,z}) {...}     //参数是无序的时候
// f2({z:1,b:2,c:3})


//  //提取json
// let js={
//     a:1,
//     b:2,
//     c:222
// };
// let {a,b,c:num}=js;
// console.log(b);//2
// console.log(num);//222

// //遍历
// var map=new Map();
// map.set('a','aaa');
// map.set('b','bbb');
// for(let [key,value] of map){
//     console.log(key +" is "+value);//a is aaa    b is bbb
// }















