const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 'hi', 3, 4, 5, 6] for [1, 2, ['hi'], [3, 4], 5, [6]]", () => {
    const result = flatten([1, 2, ["hi"], [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, "hi", 3, 4, 5, 6]);
  });
});
