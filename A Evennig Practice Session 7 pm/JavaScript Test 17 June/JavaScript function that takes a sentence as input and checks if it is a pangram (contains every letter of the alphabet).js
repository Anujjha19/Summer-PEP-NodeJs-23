function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerSentence = sentence.toLowerCase();
  
    for (let char of alphabet) {
      if (!lowerSentence.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const sentence = 'The quick brown fox jumps over the lazy dog';
  
  console.log(isPangram(sentence)); // Output: true
  