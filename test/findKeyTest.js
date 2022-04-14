const assert = require("chai").assert;
const findKey = require("../findKey");

describe("#findKey", () => {
  const data = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  };

  it('returns "Akaleri" for stars: 3 in data', () => {
    const cb = x => x.stars === 3;
    assert.strictEqual(findKey(data, cb), "Akaleri");
  });

  it('returns "noma" for stars: 2 in data', () => {
    const cb = x => x.stars === 2;
    assert.strictEqual(findKey(data, cb), "noma");
  });

  it("returns undefined for stars: 100 in data", () => {
    const cb = x => x.stars === 100;
    assert.strictEqual(findKey(data, cb), undefined);
  });
});
