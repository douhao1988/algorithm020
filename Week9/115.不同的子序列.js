/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (s.length === 0) return 0;
  if (t.length === 0) return s.length;
  let rows = t.length + 1,
    cols = s.length + 1,
    dp = Array.from(new Array(rows), () => new Array(cols).fill(0));
  for (let j = 0; j < cols; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[rows - 1][cols - 1];
};
