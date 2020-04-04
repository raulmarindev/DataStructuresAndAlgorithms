import { maxSubArray } from '../../src/arrays/maxSubArray';

describe('maxSubArray tests', () => {
    test('empty array', () => {
        // arrange
        const numbers = [] as number[];
        const actual = maxSubArray(numbers);
        expect(actual).toEqual(0);
    });
    test('array with positive and negative values', () => {
        // arrange
        const numbers = [-2, 1, 1];
        const actual = maxSubArray(numbers);
        expect(actual).toEqual(2);
    });
    test('array with positive and negative values', () => {
        // arrange
        const numbers = [-2,1,-3,4,-1,2,1,-5,4];
        const actual = maxSubArray(numbers);
        expect(actual).toEqual(6);
    });
    test('array with only negative values', () => {
        // arrange
        const numbers = [-2,-1,-3,-4,-1,-2,-1,-5,-4];
        const actual = maxSubArray(numbers);
        expect(actual).toEqual(-1);
    });
    test('array with only positive values', () => {
        // arrange
        const numbers = [2,1,3,4,1,2,1,5,4];
        const actual = maxSubArray(numbers);
        expect(actual).toEqual(23);
    });
});