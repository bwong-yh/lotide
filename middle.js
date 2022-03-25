const eqArrays = (arr1, arr2) => {
	let result;

	for (let i = 0; i < arr1.length; i++) {
		arr1[i] === arr2[i] ? (result = true) : (result = false);
	}

	return result;
};

const assertArraysEqual = (actual, expected) => {
	const errorEmoji = '\u274C';
	const successEmoji = '\uD83D\uDFE2';
	let output;

	eqArrays(actual, expected)
		? (output = `${successEmoji} Assertion Passed: ${actual} === ${expected}`)
		: (output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`);

	console.log(output);
};

const middle = (arr) => {
	const middleIdx = Math.floor(arr.length / 2);
  const middleArr = []

  if (arr.length > 2) {
    if (arr.length % 2 !== 0) {
      middleArr.push(arr[middleIdx])
    } else {
      middleArr.push(arr[middleIdx - 1], arr[middleIdx])
    }
  } 

  console.log(middleArr)
};

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
