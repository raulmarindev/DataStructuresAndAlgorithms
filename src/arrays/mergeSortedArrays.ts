// mergeSortedArrays([0,3,4,31], [3,4,6,30]);
// result => [0, 3, 4, 4, 6, 30, 31];

// Q1. Will the arrays allways be sorted?
// Q2. Is there a limit to the size of the arrays?
// Q3. Will the arrays allways contain numbers?

// O(n*logn)
const mergeSortedArrays = (array1: number[], array2: number[]) => {
    // join arrays
    const mergedArray = [...array1, ...array2];

    // sort resulting array
    return mergedArray.sort((a, b) => a - b);
};

const mergeSortedArrays2 = (array1: number[], array2: number[]) => {
    let index1 = 0;
    let index2 = 0;
    const mergedArray = [];

    let index1IsValid: boolean;
    let index2IsValid: boolean;

    do {
        index1IsValid = index1 < array1.length;
        index2IsValid = index2 < array2.length;

        if (index1IsValid && (!index2IsValid || array1[index1] <= array2[index2])) {
            mergedArray.push(array1[index1]);
            index1++;
        }
        if (index2IsValid && (!index1IsValid || array2[index2] < array1[index1])) {
            mergedArray.push(array2[index2]);
            index2++;
        }
    } while (index1IsValid || index2IsValid);

    return mergedArray;
};

const shouldPushFirstItem = (item1: number, item2: number) => !item2 || item1 <= item2;

const mergeSortedArrays3 = (array1: number[], array2: number[]) => {
    // Check
    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    let i = 0;
    let j = 0;
    let array1Item = array1[0];
    let array2Item = array2[0];
    const mergedArray = [];

    while (array1Item || array2Item) {
        if (shouldPushFirstItem(array1Item, array2Item)) {
            mergedArray.push(array1Item);
            i++;
            array1Item = array1[i];
        }
        else {
            mergedArray.push(array2Item);
            j++;
            array2Item = array2[j];
        }
    }

    return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30]));
console.log(mergeSortedArrays3([0, 3, 4, 31], [3, 4, 6, 30]));