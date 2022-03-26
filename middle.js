const eqArrays = (arr1, arr2) => {
  let result;
  
  if (arr1.length === 0 && arr1.length === arr2.length) {
    return true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? result = true : result = false;
    }
  }

  return result;
};

const assertArraysEqual = (actual, expected) => {
  const errorEmoji = '\u274C';
  const successEmoji = '\uD83D\uDFE2';
  let output;

  eqArrays(actual, expected)
    ? (output = `${successEmoji} Assertion Passed: [${actual}] === [${expected}]`)
    : (output = `${errorEmoji} Assertion Failed: [${actual}] !== [${expected}]`);

  console.log(output);
};

const middle = (arr) => {
  const middleIdx = Math.floor(arr.length / 2); // for odd number of length
  const middleArr = [];

  arr.length <= 2
    ? middleArr
    : arr.length % 2 !== 0 ? middleArr.push(arr[middleIdx]) : middleArr.push(arr[middleIdx - 1], arr[middleIdx]);

  return middleArr;
};

assertArraysEqual(middle([ 1, 2 ]), []);

assertArraysEqual(middle([ 1, 2, 3 ]), [ 2 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5 ]), [ 3 ]);

assertArraysEqual(middle([ 1, 2, 3, 4 ]), [ 2, 3 ]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5, 6 ]), [ 4, 5 ]);
