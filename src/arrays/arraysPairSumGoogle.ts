/* eslint-disable no-unused-vars */
// 2 arrays of numbers
// [1, 2, 3, 9] Sum = 8 No
// [1, 2, 4, 4] Sum = 8

// Q1. Do the arrays always contain numbers?
// Q2. Is there a limit to the size of the arrays?

// O(n^2)
const hasPairWithSum = (numbers: number[], sum: number) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) {
                continue;
            }

            if (numbers[i] + numbers[j] === sum) {
                return true;
            }
        }
    }

    return false;
};

// O(n)
const hasPairWithSum2 = (numbers: number[], targetSum: number) => {
    if (numbers.length < 2) {
        return false;
    }

    let low = 0;
    let high = numbers.length - 1;


    do {
        const currentSum = numbers[low] + numbers[high];

        if (currentSum === targetSum) {
            return true;
        }

        if (currentSum < targetSum) {
            low++;
        }
        else {
            high--;
        }
    } while (low < high);

    return false;
};

// solution for unsorted arrays
const hasPairWithSum3 = (numbers: number[], targetSum: number) => {
    const complements = new Set();

    // [2,5,-12,]
    for (let n of numbers) {
        if (complements.has(n)) {
            return true;
        }

        complements.add(targetSum - n);
    }

    return false;
};

const numbers1 = [1, 2, 3, 9];
console.log(hasPairWithSum3(numbers1, 8));
const numbers2 = [1, 2, 4, 4];
console.log(hasPairWithSum3(numbers2, 8));
const numbers3: number[] = [];
console.log(hasPairWithSum3(numbers3, 8));
const numbers4: number[] = [2, 3, -20, 12];
console.log(hasPairWithSum3(numbers4, 8));
const numbers5: number[] = [2, 3, 20, -12];
console.log(hasPairWithSum3(numbers5, 8));