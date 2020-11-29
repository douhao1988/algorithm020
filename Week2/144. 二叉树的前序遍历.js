/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 第一种：递归
  // const res = [];
  // const preorder = (root) => {
  //   if (!root) return;
  //   res.push(root.val);
  //   preorder(root.left);
  //   preorder(root.right);
  // };
  // preorder(root);
  // return res;

  // 第二种：栈
  const res = [];
  const stack = [];

  if (root) stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
};
