const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    }

    if (typeof obj1[key] === "object") {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

module.exports = eqObjects;
