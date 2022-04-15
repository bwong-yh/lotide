const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const array1 = arr1.sort((a, b) => {
    if (a < b) return -1;
  });
  const array2 = arr2.sort((a, b) => {
    if (a < b) return -1;
  });

  let result = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return result;
};

module.exports = eqArrays;
