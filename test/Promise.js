/**
 * Created by xiaoxiao on 2017/4/7.
 */
//所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，
//从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

//Promise对象有以下两个特点。

//（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。
//只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，
//它的英语意思就是“承诺”，表示其他手段无法改变。
//避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。


//Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
//其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
//第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


//Promise对象是一个构造函数!!!!!!!!!!!!!!!!!!!!!!!!!用来生成Promise实例。!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。
//resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），
//在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
 //reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），
//在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
function timeout(m) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,m,'done');
        //过了指定的时间（m参数）以后，Promise实例的状态变为Resolved，就会触发then方法绑定的回调函数。
    });
}
timeout(2000).then((v)=>{
    console.log(v);
});



let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});
promise.then(function() {
    console.log('Resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// Resolved
// 上面代码中，Promise新建后立即执行，
//所以首先输出的是“Promise”。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“Resolved”最后输出。





//Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
//它的作用是为Promise实例添加状态改变时的回调函数。
//前面说过，then方法的第一个参数是Resolved状态的回调函数，
//第二个参数（可选）是Rejected状态的回调函数。
//then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

//采用链式的then，可以指定一组按照次序调用的回调函数。
//这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
//这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用。


//Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
//发现reject方法的作用，等同于抛出错误。
//Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
//需要注意的是，catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。


//一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。



//Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，
//都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
//done方法的使用，可以像then方法那样用，提供Fulfilled和Rejected状态的回调函数，也可以不提供任何参数
//done会捕捉到任何可能出现的错误，并向全局抛出。



//finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。
//它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。












