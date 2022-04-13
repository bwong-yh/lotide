const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(result, true);
  });

  it("returns ['1', '2', '3'] for ['1', '2', '3']", () => {
    const result = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.strictEqual(result, true);
  });
});
