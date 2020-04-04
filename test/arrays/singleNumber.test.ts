import { getSingleNumber } from '../../src/arrays/singleNumber';

describe('getSingleNumber tests', () => {
    test('empty array', () => {
        // arrange
        const numbers = [] as number[];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(0);
    });
    test('array without single element', () => {
        // arrange
        const numbers = [1, 2, 3, 3, 2, 1];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(-1);
    });
    test('array with duplicated 2', () => {
        // arrange
        const numbers = [2, 2, 1] as number[];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(1);
    });
    test('array with duplicated 2', () => {
        // arrange
        const numbers = [4, 1, 2, 1, 2] as number[];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(4);
    });
    test('negative values', () => {
        // arrange
        const numbers = [-1,-1,-2] as number[];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(-2);
    });
});