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

const without = (source, itemsToRemove) => {
  return source.filter((item) => !itemsToRemove.includes(item));
};

assertArraysEqual(without([ 1, 2, 3 ], [ 1 ]), [ 2, 3 ]);
assertArraysEqual(without([ '1', '2', '3', '4' ], [ 1, 2, '3' ]), [ '1', '2' ]);

const words = [ 'hello', 'world', 'lighthouse' ];
without(words, [ 'lighthouse' ]);
assertArraysEqual(words, [ 'hello', 'world', 'lighthouse' ]);

const grades = [ 'A', 'C', 'D', 'B', 'D', 'C' ];
assertArraysEqual(without(grades, [ 'C', 'D' ]), [ 'A', 'B' ]);
