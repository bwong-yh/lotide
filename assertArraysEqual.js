const eqArrays = (arr1, arr2) => {
  let result;

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] === arr2[i] ? (result = true) : (result = false);
  }

  return result;
};

const assertArraysEqual = (actual, expect) => {
  let output
  eqArrays(actual, expect) ? output = "Assertion Passed." : output = "Assertion Failed."
  console.log(output)
}

assertArraysEqual([1,2,3], [1,2,"3"])