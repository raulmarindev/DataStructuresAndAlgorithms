import { groupAnagrams } from "../../src/arrays/groupAnagrams";

describe("groupAnagrams tests", () => {
  test.skip("empty array", () => {
    // arrange
    const words = [] as string[];
    const actual = groupAnagrams(words);
    expect(actual).toEqual(0);
  });
  test.skip("array with several anagrams", () => {
    // arrange
    const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const actual = groupAnagrams(words);
    const expected = [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]];
    expect(actual).toEqual(expected);
  });
  test("array with no anagrams", () => {
    // arrange
    const words = ["duh", "ill"];
    const actual = groupAnagrams(words);
    const expected = [["duh"], ["ill"]];
    expect(actual).toEqual(expected);
  });
  test("array with no anagrams", () => {
    // arrange
    const words = ["erg", "pie"];
    const actual = groupAnagrams(words);
    const expected = [["erg"], ["pie"]];
    expect(actual).toEqual(expected);
  });
  test("array with no anagrams and one duplicated word", () => {
    // arrange
    const words = ["pie", "erg", "pie"];
    const actual = groupAnagrams(words);
    const expected = [["pie", "pie"], ["erg"]];
    expect(actual).toEqual(expected);
  });
  test("array with empty strings", () => {
    // arrange
    const words = ["", ""];
    const actual = groupAnagrams(words);
    const expected = [["", ""]];
    expect(actual).toEqual(expected);
  });
});
