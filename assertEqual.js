const assertEqual = (actual, expected) => {
  let msg = "";

  actual === expected ? msg = `Assertion Passed: ${actual} === ${expected}` : msg = `Assertion Failed: ${actual} !== ${expected}`;
  
  console.log(msg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual(1, "1");
assertEqual(true, true);
assertEqual(true, false);
