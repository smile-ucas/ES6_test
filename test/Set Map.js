/**
 * Created by xiaoxiao on 2017/4/7.
 */
// //ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

// //Set 本身是一个构造函数，用来生成 Set 数据结构。

const  s=new Set();
[12,3,4,5,4,3,2,1].forEach(x=>s.add(x));
for(let i of s){console.log(i);}//12 2 3 4 2 1




    // //数组去重   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let arr=[1,2,3,4,5,3,2,1];
    let temp=new Set();
    arr.forEach(x=>temp.add(x));
    console.log(temp);//Set(5) {1, 2, 3, 4, 5}
    console.log(arr);//[1, 2, 3, 4, 5, 3, 2, 1]






//向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set内部判断两个值是否不同，
//使用的算法叫做“Same-value equality”，
//它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
let set=new Set(),a=NaN,b=NaN;
set.add(a),set.add(b);
console.log(set);//Set(1)            Set {NaN}

// //另外，两个对象总是不相等的。
let set =new Set();
set.add({a:2});
set.add({});
console.log(set.size);//2
set.delete({a:2});
console.log((set.size));//2
set.add(3);
console.log((set.size));//3
set.delete(3);
console.log((set.size));//2
console.log((set.has({})));//false
console.log(set);
set.clear();
console.log((set.size));//0



//它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，
//Object结构提供了“字符串—值”的对应，
//Map结构提供了“值—值”的对应，如果你需要“键值对”的数据结构，Map比Object更合适。
var map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

// //Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
// //这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。









