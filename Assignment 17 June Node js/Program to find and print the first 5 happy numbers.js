function isHappyNumber(num) {
    let seenNumbers = new Set();

    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        num = sum;
    }

    return num === 1;
}

let count = 0;
let num = 1;
let happyNumbers = [];

while (count < 5) {
    if (isHappyNumber(num)) {
        happyNumbers.push(num);
        count++;
    }
    num++;
}

console.log(happyNumbers);
