const eqArrays = (arr1, arr2) => {
  let result;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ? (result = true) : (result = false);
  }

  return result;
};

const assertArraysEqual = (actual, expected) => {
  const errorEmoji = '\u274C';
  const successEmoji = '\uD83D\uDFE2';
  let output;

  eqArrays(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
    : (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

  console.log(output);
};

const flatten = (nestedArr) => {
  const flattenedArr = [];

  for (let item of nestedArr) {
    !Array.isArray(item) ? flattenedArr.push(item) : flattenedArr.push(...item);
  }

  return flattenedArr
};

flatten([1, 2, [3, 4], 5, [6]]);