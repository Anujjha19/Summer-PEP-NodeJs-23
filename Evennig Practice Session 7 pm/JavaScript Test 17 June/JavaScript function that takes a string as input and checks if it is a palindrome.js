function checkPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Example usage
  console.log(checkPalindrome("radar")); // Output: true
  