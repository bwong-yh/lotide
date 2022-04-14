const letterPositions = sentence => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] ? results[sentence[i]].push(i) : (results[sentence[i]] = [i]);
  }

  delete results[" "];
  return results;
};

module.exports = letterPositions;
