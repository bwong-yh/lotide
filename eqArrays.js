const eqArrays = (arr1, arr2) => {
  let result = true;

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return result;
};

module.exports = eqArrays;
