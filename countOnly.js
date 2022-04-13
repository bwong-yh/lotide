const countOnly = (items, itemsToCount) => {
  return items.reduce((tally, item) => {
    if (itemsToCount[item]) tally[item] = (tally[item] || 0) + 1;

    return tally;
  }, {});
};

module.exports = countOnly;
