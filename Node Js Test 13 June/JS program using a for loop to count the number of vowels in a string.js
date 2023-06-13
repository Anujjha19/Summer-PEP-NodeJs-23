function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const input = "Hello, World!";
const vowelCount = countVowels(input);
console.log(vowelCount);
