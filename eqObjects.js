const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  eqObjects(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: Both objects contain the same data.`)
    : (output = `${errorEmoji} Assertion Failed: Both objects contain different data.`);

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

  // make sure lengths are the same in both objs
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  // make sure values of each key are the same in both objs
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      result = eqArrays(obj1[key], obj2[key]);
    } else {
      obj1[key] === obj2[key] ? (result = true) : (result = false);
    }
  }

  return result;
};

// testing primitive data as args
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc);

// testing arrays as args
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2);
