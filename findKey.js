const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }

  return undefined;
};

module.exports = findKey;
