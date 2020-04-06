import { moveZeroes } from '../../src/arrays/moveZeroes';

describe('moveZeroes tests', () => {
    test('empty array', () => {
        // arrange
        const numbers = [] as number[];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([]);
    });
    test('array that contains only an element different from zero', () => {
        // arrange
        const numbers = [10] as number[];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([10]);
    });
    test('array that contains only a zero', () => {
        // arrange
        const numbers = [0] as number[];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([0]);
    });
    test('array that contains several zeroes', () => {
        // arrange
        const numbers = [0, 0, 0, 0, 0] as number[];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([0, 0, 0, 0, 0]);
    });
    test('array with positive values', () => {
        // arrange
        const numbers = [0, 1, 0, 3, 12];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([1, 3, 12, 0, 0]);
    });
    test('array with positive and negative values', () => {
        // arrange
        const numbers = [-1, 0, 0, 0, 1, 2, 0, 0, 3, 0, 12, 0, 0];
        const actual = moveZeroes(numbers);
        expect(actual).toEqual([-1, 1, 2, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
});