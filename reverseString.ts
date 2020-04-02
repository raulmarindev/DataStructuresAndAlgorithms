// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman iH'

// Questions
// Q1 Will the parameter allways be a string?
// Q2 Is there a limit to the length of the string?

// O(n)
const reverseString = (sourceString: string) => {
    let reversedString = '';

    for (let i = sourceString.length - 1; i >= 0; i--) {
        reversedString += sourceString[i];
    }

    return reversedString;
};

const reverseString2 = (sourceString: string) => {
    return [...sourceString].reverse().join('');
};

const reverseString3 = (sourceString: string) => {
    let reversedString = [];

    for (let i = sourceString.length - 1; i >= 0; i--) {
        reversedString.push(sourceString[i]);
    }

    return reversedString.join('');
};

console.log(reverseString('Hi My name is Andrei'));
console.log(reverseString2('Hi My name is Andrei'));
console.log(reverseString3('Hi My name is Andrei'));