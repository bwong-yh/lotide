const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(result, true);
  });

  it("returns false for [1, 2, 3] and [1, 2, 3, 4]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3, 4]);
    assert.strictEqual(result, false);
  });

  it('returns true for ["Z", "a", "e", "z"] and ["z", "a", "e", "Z"]', () => {
    const result = eqArrays(["Z", "a", "e", "z"], ["z", "a", "e", "Z"]);
    assert.strictEqual(result, true);
  });

  it("returns true for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.strictEqual(result, true);
  });

  it("returns false for [[2, 3], [4]] and [[2, 3], [4, 5]", () => {
    const result = eqArrays(
      [[2, 3], [4]],
      [
        [2, 3],
        [4, 5],
      ]
    );
    assert.strictEqual(result, false);
  });
});
