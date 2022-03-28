const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  actual === expected
    ? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
    : (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

  console.log(output);
};

// take in a sentence --> return counts of each letter
const countLetters = sentence => {
  const sentenceLetters = sentence.split(" ").join("");
  const results = {};

  for (const letter of sentenceLetters) {
    results[letter] ? (results[letter] += 1) : (results[letter] = 1);
  }

  return results;
};

const countResults = countLetters("lighthouse in the house");

assertEqual(countResults["i"], 2);
assertEqual(countResults["h"], 4);
assertEqual(countResults["s"], 2);
assertEqual(countResults["e"], 3);
assertEqual(countResults["n"], 1);
