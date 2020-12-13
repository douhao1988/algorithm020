/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gn = 0,
    sn = 0;

  while (gn < g.length && sn < s.length) {
    if (g[gn] <= s[sn]) gn++;
    sn++;
  }
  return gn;
};
