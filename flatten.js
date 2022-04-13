const flatten = nestedArr => {
  const flattenedArr = [];

  for (let item of nestedArr) {
    !Array.isArray(item) ? flattenedArr.push(item) : flattenedArr.push(...item);
  }

  return flattenedArr;
};

module.exports = flatten;
