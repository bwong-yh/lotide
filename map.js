const map = function(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

const eqArrays = (arr1, arr2) => {
  let result;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ? (result = true) : (result = false);
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

const words = ["functions", "objects", "conditionals", "arrays", "loops"];
assertArraysEqual(
  map(words, word => word[0]),
  ["f", "o", "c", "a", "l"]
);

const nums = [1, 2, 3, 4, 5];
assertArraysEqual(
  map(nums, num => num ** 2),
  [1, 4, 9, 16, 25]
);

const grades = [50, 13, 34, 100, 87];
assertArraysEqual(
  map(grades, grade => grade >= 50),
  [true, false, false, true, true]
);
