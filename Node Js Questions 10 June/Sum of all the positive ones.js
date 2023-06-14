const input = [1, -4, 12, 0, -3, 29, -150];

function sumPositiveNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}
const result = sumPositiveNumbers(input);
console.log(result);
 // Output: 42 (1 + 12 + 29)

