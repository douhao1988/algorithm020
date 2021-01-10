/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    count += 1;
    n = n & (n - 1);
  }
  return count;
};
