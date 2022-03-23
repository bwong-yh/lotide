const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;

  actual === expected ? output = `${successEmoji} Assertion Passed: ${actual} === ${expected}` : output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`;
  
  console.log(output);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual(1, "1");
assertEqual(true, true);
assertEqual(true, false);
