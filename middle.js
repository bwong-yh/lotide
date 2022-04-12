const assertArraysEqual = require("./assertArraysEqual");

const middle = arr => {
  const middleIdx = Math.floor(arr.length / 2); // for odd number of length
  const middleArr = [];

  if (arr.length < 3) return middleArr;

  if (arr.length % 2 !== 0) {
    middleArr.push(arr[middleIdx]);
  } else {
    middleArr.push(arr[middleIdx - 1], arr[middleIdx]);
  }

  return middleArr;
};

module.exports = { assertArraysEqual, middle };
