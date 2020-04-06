export function groupAnagrams2(words: string[]) {
  if (words.length <= 1) {
    return [words];
  }

  const groups = new Map<string, string[]>();

  for (let word of words) {
    let lowerLetter = "";
    let lowerValue = Number.MAX_SAFE_INTEGER;
    let higherLetter = "";
    let higherValue = Number.MIN_SAFE_INTEGER;
    let asciiSum = 0;

    for (let letter of word) {
      const asciiValue = letter.charCodeAt(0);
      if (asciiValue < lowerValue) {
        lowerValue = asciiValue;
        lowerLetter = letter;
      }
      if (asciiValue > higherValue) {
        higherValue = asciiValue;
        higherLetter = letter;
      }
      asciiSum += asciiValue;
    }

    const groupKey = `${lowerLetter}${asciiSum}${higherLetter}`;
    const group = groups.get(groupKey);

    if (group) {
      groups.set(groupKey, [...group, word]);
    } else {
      groups.set(groupKey, [word]);
    }
  }

  return Array.from(groups.values());
}

export function groupAnagrams(words: string[]) {
  if (words.length <= 1) {
    return [words];
  }

  const groups = new Map<string, string[]>();

  for (let word of words) {
    const groupKey = [...word].sort().join("");
    const group = groups.get(groupKey);

    if (group) {
      groups.set(groupKey, [...group, word]);
    } else {
      groups.set(groupKey, [word]);
    }
  }

  return Array.from(groups.values());
}
