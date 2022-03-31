const assertEqual = (actual, expected) => {
  const errorEmoji = "\u274C";
  const successEmoji = "\uD83D\uDFE2";
  let output;
  
  actual === expected ? output = `${successEmoji} Assertion Passed: ${actual} === ${expected}` : output = `${errorEmoji} Assertion Failed: ${actual} !== ${expected}`;
    
  console.log(output);
};

const findKey = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) return key;
  }

  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");