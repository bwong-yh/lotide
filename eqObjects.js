const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  let result;

  // make sure both objects have the same number of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  // make sure values of each key are the same in both objects
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      result = eqArrays(obj1[key], obj2[key]);
    } else {
      obj1[key] === obj2[key] ? (result = true) : (result = false);
    }
  }

  return result;
};

// primitive as values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true);

// arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), true);
