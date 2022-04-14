const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it("returns key 'drama' from value 'The Wire' in bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined from value 'That '70s Show' in bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
