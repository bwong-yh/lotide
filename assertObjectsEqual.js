const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;

  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  eqObjects(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : (output = `${errorEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  console.log(output);
};

const eqArrays = (arr1, arr2) => {
  let result;

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ? (result = true) : (result = false);
  }

  return result;
};

const eqObjects = (obj1, obj2) => {
  let result;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      result = eqArrays(obj1[key], obj2[key]);
    } else {
      obj1[key] === obj2[key] ? (result = true) : (result = false);
    }
  }

  return result;
};

// testing primitive data as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

// testing arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
