function removeDuplicates(text) {
    const uniqueChars = [];
  
    for (let char of text) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
  
    return uniqueChars.join('');
  }
  
  // Example usage
  const text = 'hello world';
  
  console.log(removeDuplicates(text)); // Output: 'helo wrd'
  