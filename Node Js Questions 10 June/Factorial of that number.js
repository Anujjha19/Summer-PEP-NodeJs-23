function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const input = 4;
const result = factorial(input);
console.log("Factorial:", result);
// Output: Factorial: 24

