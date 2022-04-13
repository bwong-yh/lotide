const assertEqual = require("./assertEqual");

const countLetters = sentence => {
  const letters = sentence.split(" ").join("");
  const results = {};

  for (const char of letters) {
    results[char] ? (results[char] += 1) : (results[char] = 1);
  }

  return results;
};

const countResults = countLetters("lighthouse in the house");

assertEqual(countResults["i"], 2);
assertEqual(countResults["h"], 4);
assertEqual(countResults["s"], 2);
assertEqual(countResults["e"], 3);
assertEqual(countResults["n"], 1);
