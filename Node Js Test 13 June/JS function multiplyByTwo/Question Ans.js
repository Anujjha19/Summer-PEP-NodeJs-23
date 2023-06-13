/* 
Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
Example Input: multiplyByTwo(5, callback);  Expected Output:Result: 10
*/
function multiplyByTwo(number, callback) {
    const result = number * 2;
    callback(result);
}
function callback(result) {
    console.log('Result:', result);
}
multiplyByTwo(5, callback);
