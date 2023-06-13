function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True' ;

}

const input = "racecar";
const value = checkPalindrome(input);
console.log(value);

