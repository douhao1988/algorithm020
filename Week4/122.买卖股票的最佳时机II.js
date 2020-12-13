// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // if (!prices || prices.length <= 1) return 0;
  // let res = 0, tmp;
  // for (let i = 1; i < prices.length; i++) {
  //     if ((tmp = prices[i] - prices[i - 1]) > 0)
  //         res += tmp;
  // }
  // return res;

  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      ans += prices[i + 1] - prices[i];
    }
  }
  return ans;
};
