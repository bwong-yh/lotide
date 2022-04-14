const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  let result = true;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      result = eqArrays(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return result;
};

module.exports = eqObjects;
