/**
 * Created by xiaoxiao on 2017/4/8.
 */

//Generator 是可迭代对象的一种实现。

// Generator 最大的好处就是!!!!!!!!!!!!!!!!!!函数可以被暂停执行并保持上下文!!!!!!!!!!!!!!!!!!


//执行 generator 方法会创建一个 Generator 对象我们可以通过 next 方法来控制函数执行。

// 运行 next 方法会执行 generator 函数中的代码，直到碰到下一个 yield 表达式（译注：执行完 yield 暂停）。







//yield* 是用来在一个 generator 中调用另一个 generator
function* foo() {
    yield 'foo'
}
// 我们在'bar'generator函数内调用 'foo' generator函数会怎么样?
function* bar() {
    yield 'bar'
    foo()
    yield 'bar again'
}
const b = bar();
b.next() // { value: 'bar', done: false }
b.next() // { value: 'bar again', done: false }
b.next() // { value: undefined, done: true }



//被 bar generator 方法执行返回的 b 迭代器，当我们调用 foo并没有以我们期望的方式运行。
// 这是因为，尽管 foo 创建的迭代器器调用了，但我们没有遍历它。
// 这就是为什么ES6带来的 yield* 语法。
function* foo() {
    yield 'foo'
}
function* bar() {
    yield 'bar'
    yield* foo()
    yield 'bar again'
}
const b = bar();
b.next() // { value: 'bar', done: false }
b.next() // { value: 'foo', done: false }
b.next() // { value: 'bar again', done: false }
b.next() // { value: undefined, done: true }
for (let e of bar()) {
    console.log(e)
    // bar
    // foo
    // bar again
}
console.log([...bar()]) // [ 'bar', 'foo', 'bar again' ]



// 我们可以发现， yield* 允许我们在一个生成器的内部调用另一个生成器。
// 它也允许我们通过执行生成器存储返回的值。
function* foo() {
    yield 'foo'
    return 'foo done'
}
function* bar() {
    yield 'bar'
    const result = yield* foo()
    yield result
}
for (let e of bar()) {
    console.log(e)
    // bar
    // foo
    // foo done
}

//throw
// 我们可以在一个 geneator 中抛出错误， next 将会传播我们的期望的值
// 只要有一个异常处理被抛出，遍历器就会暂停，它的状态也被无限期的设置为 done: true。
function* generatorWithThrow() {
    yield 'foo'
    throw new Error('Ups!')
    yield 'bar'
}
var g = generatorWithThrow()
g.next() // { value: 'foo', done: false }
g.next() // Error: Ups!
g.next() // { value: undefined, done: true }






// return
function* generatorWithReturn() {
    yield 'foo'
    yield 'bar'
    return 'done'
}
var g = generatorWithReturn()
g.next() // { value: 'foo', done: false }
g.next() // { value: 'bar', done: false }
g.next() // { value: 'done', done: true }
g.next() // { value: undefined, done: true }
for (let e of g) {
    console.log(e)
    // 'foo'
    // 'bar'
}
// 注意这里！！！！！！！！！！！！！！！！！！！！没有跟着return后面的值！！！！！！！！！！！！！！！
console.log([...g]) // [ 'foo', 'bar' ]
//return 也不想yeild能记住上下文执行generatorFun.next()都行，return后就不能再执行这个generatorFun.next()了，这个函数执行后得到的也是{value:undefined，done:true}






// //从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
// //执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
// //返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

// //形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
// //二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）。



// //Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用Generator函数后，该函数并不执行，
// //返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象!!!!!!!!!!1

// //下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，
// //直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
//
// function* gen() {
//     yield 'aaa';
//     yield 'bbb';
//     return 'end';
// }
// var i=gen();
// console.log(i.next());//Object {value: "aaa", done: false}
// console.log(i.next());//Object {value: "bbb", done: false}
// console.log(i.next());//Object {value: "end", done: true}
// console.log(i.next());//Object {value: undefined, done: true}
// console.log(i.next());//Object {value: undefined, done: true}

// //调用Generator函数，返回一个遍历器对象（就是一个指针对象！！！！），代表Generator函数的内部指针。以后，每次调用遍历器对象的next方法，
// //就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；
// //done属性是一个布尔值，表示是否遍历结束。





// //由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield语句就是暂停标志。
// function* gen() {
//     yield 'aaa';
//     yield 1+2;
//     return 'end';
// }
// var i=gen();
// console.log(i.next());//Object {value: "aaa", done: false}
// console.log(i.next());//Object {value: 3, done: false}
// console.log(i.next());//Object {value: "end", done: true}
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  //                                        yield 和return的区别
// //yield可以有多个，每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行！！！！！！！！！！！！！！！！！！！！
// //但是return最多只有一个，return不具备位置记忆功能！！！！！！！！！！！！！！！！！！！！！！！
// //yield语句只能用在 Generator 函数里面，用在其他地方都会报错。!!!!!!!!!
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //yield语句如果用在一个表达式之中，必须放在圆括号里面。
// function* demo() {
//     console.log('Hello' + yield); // SyntaxError
//     console.log('Hello' + yield 123); // SyntaxError
//
//     console.log('Hello' + (yield)); // OK
//     console.log('Hello' + (yield 123)); // OK
// }
// //yield语句用作函数参数或放在赋值表达式的右边，可以不加括号。
// function* demo() {
//     foo(yield 'a', yield 'b'); // OK
//     let input = yield; // OK
// }




// function f() {
//     alert('1');
// }
// var a=f();//执行了f函数



// //函数f是一个 Generator 函数，就变成只有调用next方法时，函数f才会执行。
// function* f() {
//     alert('1');
// }
// var a=f();//执行了f函数



// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
// }
// var a = foo(5);
// a.next() // Object{value:6, done:false}
// a.next() // Object{value:NaN, done:false}
// a.next() // Object{value:NaN, done:true}
// var b = foo(5);
// b.next() // { value:6, done:false }
// b.next(12) // { value:8, done:false }
// b.next(13) // { value:42, done:true }
// //第二次运行next方法的时候不带参数，导致y的值等于2 * undefined（即NaN），除以3以后还是NaN，因此返回对象的value属性也等于NaN。
// //第三次运行Next方法的时候不带参数，
// //所以z等于undefined，返回对象的value属性等于5 + NaN + undefined，即NaN。
// // /////////////////////      由于next方法的参数表示上一个yield语句的返回值!!!!!!!!!!!!所以第一次使用next方法时，不能带有参数!!!!!!!!!!!//////////
// //如果向next方法提供参数，返回结果就完全不一样了。上面代码第一次调用b的next方法时，
// //返回x+1的值6；第二次调用next方法，将上一次yield语句的值设为12，因此y等于24，返回y / 3的值8；
// //第三次调用next方法，将上一次yield语句的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。

// //在for。。。of中不用next

// function* numbers () {
//     yield 1
//     yield 2
//     return 3
//     yield 4
// }
//
// // 扩展运算符
// [...numbers()] // [1, 2]
//
// // Array.from 方法
// Array.from(numbers()) // [1, 2]
//
// // 解构赋值
// let [x, y] = numbers();
// x // 1
// y // 2
//
// // for...of 循环
// for (let n of numbers()) {
//     console.log(n)
// }
// // 1
// // 2





// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                       yield* 语句
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function* foo() {
//     yield 'a';
//     yield 'b';
// }
// function* bar() {
//     yield 'x';
//     foo();
//     yield 'y';
// }
// for (let v of bar()){
//     console.log(v);
// }
// // "x"
// // "y"



// function* foo() {
//     yield 'a';
//     yield 'b';
// }
// function* bar() {
//     yield 'x';
//     yield* foo();
//     yield 'y';
// }
// for(let i of bar()){
//     console.log(i) //x a b y
// }



// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //                                                        状态机
// // // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// var clock = function*() {
//     while (true) {
//         console.log('Tick!');
//         yield;
//         console.log('Tock!');
//         yield;
//     }
// };






