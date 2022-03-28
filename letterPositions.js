const letterPositions = sentence => {
  const results = {};
  const sentenceLetters = sentence.split(" ").join("");

  for (let i = 0; i < sentenceLetters.length; i++) {
    if (results[sentenceLetters[i]]) {
      results[sentenceLetters[i]].push(i);
    } else {
      results[sentenceLetters[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
