const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    } else {
      // sort both arrays so elements can be placed accordingly for comparsion
      const sortedArr1 = arr1.sort((a, b) => {
        if (a < b) return -1;
      });
      const sortedArr2 = arr2.sort((a, b) => {
        if (a < b) return -1;
      });
      if (sortedArr1[i] !== sortedArr2[i]) return false;
    }
  }

  return true;
};

module.exports = eqArrays;
