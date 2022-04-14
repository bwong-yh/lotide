const findKeyByValue = (inputObj, value) => {
  for (const key in inputObj) {
    if (inputObj[key] === value) return key;
  }
};

module.exports = findKeyByValue;
