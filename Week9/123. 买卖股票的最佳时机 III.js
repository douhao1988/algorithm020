/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || !prices.length) return 0;
  let profitOne0 = (profitTwo0 = 0),
    profitOne1 = (profitTwo1 = -prices[0]),
    len = prices.length;
  for (let i = 1; i < len; i++) {
    profitTwo0 = Math.max(profitTwo0, profitTwo1 + prices[i]);
    profitTwo1 = Math.max(profitTwo1, profitOne0 - prices[i]);
    profitOne0 = Math.max(profitOne0, profitOne1 + prices[i]);
    profitOne1 = Math.max(profitOne1, -prices[i]);
  }
  return profitTwo0;
};
