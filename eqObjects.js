const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  eqObjects(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
    : (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

  console.log(output);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc);
