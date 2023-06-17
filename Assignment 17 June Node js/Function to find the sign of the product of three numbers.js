function findProductSign(a, b, c) {
    let product = a * b * c;
    let sign = product > 0 ? '+' : product < 0 ? '-' : '0';
    return sign;
}

// Example usage:
alert(findProductSign(3, -7, 2)); // Output: The sign is -
