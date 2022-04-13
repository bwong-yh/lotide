const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns ['1', '2', '4'] for ['1', '2', '3', '4']", () => {
    const result = without(["1", "2", "3", "4"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2", "4"]);
  });

  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse]", () => {
    const result = without(["hello", "world", "lighthouse"], ["lighthouse"]);
    assert.deepEqual(result, ["hello", "world"]);
  });

  it('returns ["A", "B"] for ["A", "C", "D", "B", "D", "C"]', () => {
    const result = without(["A", "C", "D", "B", "D", "C"], ["C", "D", "e", "F"]);
    assert.deepEqual(result, ["A", "B"]);
  });
});
