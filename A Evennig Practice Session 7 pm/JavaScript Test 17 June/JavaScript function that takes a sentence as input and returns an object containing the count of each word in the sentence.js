function countWords(sentence) {
    const words = sentence.split(' ');
    const wordCount = {};
    
    for (let word of words) {
      if (wordCount[word]) {
        wordCount[word] += 1;
      } else {
        wordCount[word] = 1;
      }
    }
    
    return wordCount;
  }
  
  // Example usage
  const sentence = 'This is a sentence is a test';
  
  console.log(countWords(sentence));
  // Output: { This: 1, is: 2, a: 2, sentence: 1, test: 1 }
  