// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// The input consists of an array of numbers (integers)
// The size of the subarray can go from 1 to the whole array

// Q1. Is there a limit to the size of the array?
export function maxSubArray2(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return numbers[0];
    }

    const leftSubarray = numbers.slice(0, numbers.length - 1);
    const maxSumSubarrayLeft = maxSubArray2(leftSubarray);

    const rightSubarray = numbers.slice(1);
    const maxSumSubarrayRight = maxSubArray2(rightSubarray);

    const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return Math.max(maxSumSubarrayLeft, sumNumbers, maxSumSubarrayRight);
};

export function maxSubArray3(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }

    if (numbers.length === 1) {
        return numbers[0];
    }

    const lastIndexValue = numbers.length;
    let subArrayStartIndex = 0;
    let subArraySize = numbers.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let subArrayEndIndex = subArraySize;

    do {
        while (subArrayEndIndex <= lastIndexValue) {
            const subArray = numbers.slice(subArrayStartIndex, subArrayEndIndex);

            const currentSum = subArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            maxSum = Math.max(maxSum, currentSum);
            subArrayStartIndex++;
            subArrayEndIndex++;
        }

        subArrayStartIndex = 0;
        subArraySize--;
        subArrayEndIndex = subArraySize;

    } while (subArraySize >= 1);


    return maxSum;
}

export function maxSubArray4(numbers: number[]): number {
    let bestSum = 0;
    let currentSum = 0;
    let maxValue = Number.MIN_SAFE_INTEGER;

    for (let n of numbers) {
        currentSum = Math.max(0, currentSum + n);
        bestSum = Math.max(bestSum, currentSum);
        maxValue = Math.max(maxValue, n);
    }

    if (bestSum === 0 && maxValue > Number.MIN_SAFE_INTEGER) {
        return maxValue;
    }

    return bestSum;
}

export function maxSubArray(numbers: number[]): number {
    const arrayLength = numbers.length;

    if (arrayLength === 0) {
        return 0;
    }

    const maxSums = new Array<number>(arrayLength);

    maxSums[0] = numbers[0];

    for (let i = 1; i < arrayLength; i++) {
        maxSums[i] = maxSums[i - 1] > 0 ? numbers[i] + maxSums[i - 1] : numbers[i];
    }

    return Math.max(...maxSums);
}