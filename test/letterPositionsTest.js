const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("return [2, 3] for 'l' in 'hello'", () => {
    const result = letterPositions("hello").l;
    assert.deepEqual(result, [2, 3]);
  });

  it("return [3, 5, 15, 18] for 'h' in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").h;
    assert.deepEqual(result, [3, 5, 15, 18]);
  });

  it("return [9, 16, 22] for 'e' in 'lighthouse in the house'", () => {
    const result = letterPositions("lighthouse in the house").e;
    assert.deepEqual(result, [9, 16, 22]);
  });
});
