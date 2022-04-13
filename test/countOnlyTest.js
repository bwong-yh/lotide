const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  const names = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  const result = countOnly(names, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });

  it('returns 1 for ["Jason"] in ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    assert.strictEqual(result["Jason"], 1);
  });

  it('returns 2 for ["Fang"] in ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    assert.strictEqual(result["Fang"], 2);
  });

  it('returns undefined for ["Karima"] in ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    assert.strictEqual(result["Karima"], undefined);
  });

  it('returns undefined for ["Agouhanna"] in ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});
