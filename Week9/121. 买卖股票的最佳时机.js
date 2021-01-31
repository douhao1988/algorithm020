/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || !prices.length) return 0;
  let p0 = 0,
    p1 = -prices[0],
    len = prices.length;
  for (let i = 1; i < len; i++) {
    p0 = Math.max(p0, p1 + prices[i]);
    p1 = Math.max(p1, -prices[i]);
  }
  return p0;
};
