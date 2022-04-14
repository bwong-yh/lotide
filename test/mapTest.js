const assert = require("chai").assert;
const map = require("../map");

describe("#map", () => {
  it('returns ["d", "r", "y"] for ["don\'t", "repeat", "yourself"]', () => {
    const arr = ["don't", "repeat", "yourself"];
    const cb = item => item[0];

    assert.deepEqual(map(arr, cb), ["d", "r", "y"]);
  });

  it("returns [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5]", () => {
    const arr = [1, 2, 3, 4, 5];
    const cb = item => item * item;

    assert.deepEqual(map(arr, cb), [1, 4, 9, 16, 25]);
  });

  it("returns [true, false, false, true, true] for [50, 13, 34, 100, 87]", () => {
    const arr = [50, 13, 34, 100, 87];
    const cb = item => item >= 50;

    assert.deepEqual(map(arr, cb), [true, false, false, true, true]);
  });
});
