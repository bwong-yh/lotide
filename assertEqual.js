const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  actual === expected
    ? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
    : (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

  console.log(output);
};

module.exports = assertEqual;
