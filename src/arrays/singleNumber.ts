// We receive an array that is not empty
// The array always contains integers
// every element appears twice except for one
// Goal: We need to find the single element

// Q1. Is there a limit to the size of the array?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// O(a + b)
export const getSingleNumber = (numbers: number[]) => {
    if (numbers.length === 0) {
        return 0;
    }

    const numbersCount = new Map<number, number>();

    for (let n of numbers) {
        if (numbersCount.has(n)) {
            numbersCount.set(n, 2);
        }
        else {
            numbersCount.set(n, 1);
        }
    }

    for (let count of numbersCount) {
        if (count[1] === 1) {
            return count[0];
        }
    }

    return -1;
};

(numbers: number[]) => {
    if (numbers.length === 0) {
        return 0;
    }

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (numbers.indexOf(currentNumber) === numbers.lastIndexOf(currentNumber)) {
            return currentNumber;
        }
    }

    return -1;
};