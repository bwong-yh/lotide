const assert = require("chai").assert;
const countLetters = require("../countLetters");

describe("#countLetters", () => {
  const result = countLetters("lighthouse in the house");

  it("returns 2 for 'i' in 'lighthouse in the house'", () => {
    assert.strictEqual(result["i"], 2);
  });

  it("returns 4 for 'h' in 'lighthouse in the house'", () => {
    assert.strictEqual(result["h"], 4);
  });

  it("returns 3 for 'e' in 'lighthouse in the house'", () => {
    assert.strictEqual(result["e"], 3);
  });

  it("returns undefined for 'z' in 'lighthouse in the house'", () => {
    assert.strictEqual(result["z"], undefined);
  });
});
