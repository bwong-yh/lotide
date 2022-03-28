const eqArrays = (arr1, arr2) => {
  let result;

  if (arr1.length === 0 && arr1.length === arr2.length) {
    return true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? (result = true) : (result = false);
    }
  }

  return result;
};

const assertArraysEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  eqArrays(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: [${actual}] === [${expected}]`)
    : (output = `${errorEmoji} Assertion Failed: [${actual}] !== [${expected}]`);

  console.log(output);
};

const letterPositions = sentence => {
  const results = {};
  const sentenceLetters = sentence.split(" ").join("");

  for (let i = 0; i < sentenceLetters.length; i++) {
    results[sentenceLetters[i]]
      ? results[sentenceLetters[i]].push(i)
      : (results[sentenceLetters[i]] = [i]);
  }

  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);
