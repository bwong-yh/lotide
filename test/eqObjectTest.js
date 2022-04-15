const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('returns false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it('returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it('returns false for { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for { a: { z: 1 }, b: 2 } and { b: 2, a: { z: 1 } }", () => {
    const xy = { a: { z: 1 }, b: 2 };
    const yx = { b: 2, a: { z: 1 } };
    assert.strictEqual(eqObjects(xy, yx), true);
  });

  it("returns false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    const ij = { a: { y: 0, z: 1 }, b: 2 };
    const ji = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(ij, ji), false);
  });
});
