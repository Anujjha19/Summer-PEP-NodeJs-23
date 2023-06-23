function getFibonacciSequence(limit) {
    const sequence = [0, 1];
    let a = 0;
    let b = 1;
  
    while (b <= limit) {
      const nextNumber = a + b;
      sequence.push(nextNumber);
      a = b;
      b = nextNumber;
    }
  
    return sequence;
  }
  
  // Example usage
  const limit = 10;
  
  console.log(getFibonacciSequence(limit)); // Output: [0, 1, 1, 2, 3, 5, 8]
  