const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  // inspect will display the object value stored in each key
  const inspect = require("util").inspect;

  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  eqObjects(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    : (output = `${errorEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  console.log(output);
};

module.exports = assertObjectsEqual;
