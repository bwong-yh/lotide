const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const cb = x => x < 0;

    assert.deepEqual(takeUntil(data, cb), [1, 2, 5, 7, 2]);
  });

  it('returns ["hello", "there"] for ["hello", "there", ",", "friend"]', () => {
    const data = ["hello", "there", ",", "friend"];
    const cb = x => x === ",";

    assert.deepEqual(takeUntil(data, cb), ["hello", "there"]);
  });
});
