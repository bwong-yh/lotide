const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns result[0] === "Lighthouse" for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it('returns result[1] === "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });

  it("returns result[0] === undefined if only one item in an array", () => {
    const result = tail(["Hello"]);
    assert.strictEqual(result[0], undefined);
  });

  it("returns result[0] === undefined for empty array", () => {
    const result = tail([]);
    assert.strictEqual(result[0], undefined);
  });
});
