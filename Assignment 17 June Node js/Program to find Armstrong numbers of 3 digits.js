function isArmstrongNumber(num) {
    let originalNum = num;
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, 3);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
}

let armstrongNumbers = [];

for (let i = 100; i <= 999; i++) {
    if (isArmstrongNumber(i)) {
        armstrongNumbers.push(i);
    }
}

console.log(armstrongNumbers);
