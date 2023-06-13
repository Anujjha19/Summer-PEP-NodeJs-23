/* 
Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
Example Input:calculateSum([2, 4, 6, 8], callback);   Expected Output:Sum: 20
*/
function calculateSum(numbers, callback) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    callback(sum);
}

function callback(sum) {
    console.log('Sum:', sum);
}

calculateSum([2, 4, 6, 8], callback);
