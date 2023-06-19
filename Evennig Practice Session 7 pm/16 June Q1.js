
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
    }, 2000);
})
const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('World');
    }, 2000);
})
promiseA.then(resultA => {
    console.log(resultA);
    return promiseB;
}).then(resultB => {
    console.log(resultB);
})
/* 
What will be the Output of the above code ?
    
    Hello
    World

Above is a Promise Chain , and in a Promise chain , PromiseA resolves first then PromiseB.
So , together after 2 second both is printing.

*/