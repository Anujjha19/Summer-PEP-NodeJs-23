const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 2000);
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error');
    }, 2000);
});

Promise.all([promiseA, promiseB])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

/* 
Error

This is showing an error because when we do Promise.all() , then all the promises should be resolve, if any of the promises are rejected then the promise.all() will throw an error. 

*/