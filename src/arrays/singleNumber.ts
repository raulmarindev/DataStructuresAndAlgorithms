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
    const counts = [];

    for (let n of numbers) {
        if (counts[n]) {
            counts[n]++;
        }
        else {
            counts[n] = 0;
        }
    }

    return numbers.indexOf(1);
};