const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  actual === expected ? output = `${successEmoji} Assertion Passed: ${actual} === ${expected}` : output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`;
  
  console.log(output);
};

const head = (arr) => arr[0]

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");