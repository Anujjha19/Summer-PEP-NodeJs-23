function reverseNumber(num) {
    let reversed = 0;

    while (num !== 0) {
        reversed *= 10;
        reversed += num % 10;
        num = Math.floor(num / 10);
    }

    return reversed;
}

const input = 12345;
const reversedNumber = reverseNumber(input);
console.log(reversedNumber);
