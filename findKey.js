const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }
};

module.exports = findKey;
