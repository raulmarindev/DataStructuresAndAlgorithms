// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// The non-zero elements are sorted
// Q1. Can the array contain negative numbers?
// Q2. Can the array be empty?

export function moveZeroes(numbers: number[]) {
  if (numbers.length <= 1) {
    return numbers;
  }

  const maxIndexValue = numbers.length - 2;
  let i = maxIndexValue;
  while (i >= 0) {
    const numberToTheRight = numbers[i + 1];
    if (numbers[i] === 0 && numberToTheRight !== 0) {
      numbers[i] = numberToTheRight;
      numbers[i + 1] = 0;
      if (i < maxIndexValue) {
        i++;
      } else {
        i--;
      }
    } else {
      i--;
    }
  }

  return numbers;
}
