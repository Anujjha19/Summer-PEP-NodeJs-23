function sumSquares(numbers) {
    let sum = 0;
  
    for (let number of numbers) {
      sum += number ** 2;
    }
  
    return sum;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4];
  
  console.log(sumSquares(numbers)); // Output: 30
  