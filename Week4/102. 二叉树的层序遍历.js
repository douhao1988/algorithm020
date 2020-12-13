// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 1.DFS递归版
  // if (!root) return []
  // const ans = []
  // const dfs = (node, current, ans) => {
  //     if (!ans[current]) ans[current] = []
  //     ans[current].push(node.val)
  //     node.left && dfs(node.left, current + 1, ans)
  //     node.right && dfs(node.right, current + 1, ans)
  // }
  // dfs(root, 0, ans);
  // return ans;

  // 2.BFS
  if (!root) return [];
  let ans = [],
    queue = [root];
  while (queue.length > 0) {
    let level = [],
      n = queue.length;
    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }
    ans.push(level);
  }
  return ans;
};
