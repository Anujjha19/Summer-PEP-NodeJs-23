// What is a Promise in JavaScript and how does it work? Explain the states of a Promise. Explain how to chain multiple Promises together and the syntax for doing so.	
function asyncTask1() {
    return new Promise((resolve, reject) => {
        // Perform an asynchronous task
        setTimeout(() => {
            resolve('Task 1 completed');
        }, 1000);
    });
}

function asyncTask2() {
    return new Promise((resolve, reject) => {
        // Perform another asynchronous task
        setTimeout(() => {
            resolve('Task 2 completed');
        }, 2000);
    });
}

asyncTask1()
    .then((result) => {
        console.log(result);
        return asyncTask2();
    })
    .then((result) => {
        console.log(result);
        // Add more `.then()` for further chaining if needed
    })
    .catch((error) => {
        console.error(error);
    });
