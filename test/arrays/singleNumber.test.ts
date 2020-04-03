import { getSingleNumber } from '../../src/arrays/singleNumber';

describe('getSingleNumber tests', () => {
    test('empty array', () => {
        // arrange
        const numbers = [] as number[];
        const actual = getSingleNumber(numbers);
        expect(actual).toEqual(undefined);
    });
});