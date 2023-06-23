function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  
  // Example usage
  const sentence = 'this is a test';
  
  console.log(capitalizeWords(sentence)); // Output: 'This Is A Test'
  