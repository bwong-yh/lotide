const assertArraysEqual = require("./assertArraysEqual");

const middle = arr => {
  const middleIdx = Math.floor(arr.length / 2); // for odd number of length

  if (arr.length < 3) return [];

  if (arr.length % 2 !== 0) {
    return [arr[middleIdx]];
  } else {
    return [arr[middleIdx - 1], arr[middleIdx]];
  }
};

module.exports = { assertArraysEqual, middle };
