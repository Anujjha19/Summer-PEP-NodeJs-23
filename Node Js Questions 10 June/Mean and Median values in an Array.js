const input = [12, 46, 32, 64];

function calculateMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const mean = sum / arr.length;
    return mean;
}

function calculateMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    let median;

    if (sortedArr.length % 2 === 0) {
        median = (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        median = sortedArr[mid];
    }

    return median;
}

const mean = calculateMean(input);
const median = calculateMedian(input);

console.log("Mean:", mean);                    // Output: Mean: 38.5
console.log("Median:", median);              // Output: Median: 29

