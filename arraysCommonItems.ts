/* eslint-disable no-unused-vars */
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// Inputs: 2 arrays, Outputs: boolean

// Questions:

// Q1. Do both arrays have the same length?

// Q2. Is there a limit to the array's length?

// Q3. What is the type of the elements in the arrays?

// Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// it shoult return false.
// -------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// it shoult return true.

// 2 parameters => always arrays - no size limit
// return => boolean

// O(a*b)
const containsCommonItem = (array1: string[], array2: string[]) => {
    for (const char1 of array1) {
        for (const char2 of array2) {
            if (char1 === char2) {
                return true;
            }
        }
    }

    return false;
};

// array1 ==> obj }
// a: true
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

// O(a + b)
const containsCommonItem2 = (array1: string[], array2: string[]) => {
    // transform array1 into object
    // init empty object
    const elements: any = {};

    // for each element in array1
    for (let item of array1) {
        // add new property to our object with the element as name
        elements[item] = true;
    }

    // for each element in array2
    for (let item of array2) {
        // if object contains element as property
        if (elements[item]) {
            return true;
        }
    }

    return false;
};

const containsCommonItem3 = (array1: string[], array2: string[]) => {
    return array1.some(item => array2.includes(item));
};



const array1 = ['a', 'a', 'c', 'x'];
let array2 = ['a', 'y', 'i'];

console.log(containsCommonItem3(array1, array2));

array2 = ['z', 'y', 'x'];
console.log(containsCommonItem3(array1, array2));
