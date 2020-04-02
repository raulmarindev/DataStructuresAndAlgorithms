"use strict";
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// result => [0, 3, 4, 4, 6, 30, 31];
// Q1. Will the arrays allways be sorted?
// Q2. Is there a limit to the size of the arrays?
// Q3. Will the arrays allways contain numbers?
// O(n*logn)
const mergeSortedArrays = (array1, array2) => {
    // join arrays
    const mergedArray = array1.concat(array2);
    // sort resulting array
    return mergedArray.sort((a, b) => a - b);
};
const mergeSortedArrays2 = (array1, array2) => {
    let index1 = 0;
    let index2 = 0;
    const mergedArray = [];
    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] <= array2[index2]) {
            mergedArray.push(array1[index1]);
            index1++;
        }
        else {
            mergedArray.push(array2[index2]);
            index2++;
        }
    }
    return mergedArray;
};
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
