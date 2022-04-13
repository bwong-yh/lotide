const countLetters = sentence => {
  const letters = sentence.replace(/\s/g, "").split("");

  return letters.reduce((tally, letter) => {
    tally[letter] = (tally[letter] || 0) + 1;

    return tally;
  }, {});
};

module.exports = countLetters;
