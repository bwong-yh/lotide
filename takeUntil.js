const takeUntil = (arr, callback) => {
  let result = [];

  for (const item of arr) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;
