const input = [1, 2, 3, 4, 5];

function squareArray(arr) {
    return arr.map((num) => num * num);
}

const result = squareArray(input);
console.log(result);
      // Output: [1, 4, 9, 16, 25]
