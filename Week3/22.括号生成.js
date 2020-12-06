/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];

  function dfs(left, right, str) {
    // 第一步：设定终止条件
    if (left > right) return;

    // 第二步：处理当前层逻辑
    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }
    // 第三步：下探到下一层
    if (left > 0) dfs(left - 1, right, str + '(');
    if (right > 0) dfs(left, right - 1, str + ')');

    // 清理当前层
    // 这里不需要清理所以忽略了
  }
  dfs(n, n, '');
  return ans;
};
