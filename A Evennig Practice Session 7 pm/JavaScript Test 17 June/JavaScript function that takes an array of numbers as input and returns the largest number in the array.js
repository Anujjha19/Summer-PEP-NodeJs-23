function findLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
  }
  
  // Example usage
  console.log(findLargestNumber([4, 2, 9, 5])); // Output: 9
  