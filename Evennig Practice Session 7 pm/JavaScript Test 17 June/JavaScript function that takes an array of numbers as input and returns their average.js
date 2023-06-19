function getAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
  
  // Example usage
  console.log(getAverage([2, 4, 6, 8])); // Output: 5
  