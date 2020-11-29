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
var postorderTraversal = function (root) {
  // 第一种：递归
  const res = [];
  const postorder = (root) => {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    res.push(root.val);
  };
  postorder(root);
  return res;

  // 第二种：栈
  // const res = [];
  // const stack = [];
  // let pre = null;
  // while (root || stack.length) {
  //   if (root) {
  //     stack.push(root);
  //     root = root.left;
  //   } else {
  //     root = stack.pop();
  //     if (!root.right || root.right === pre) {
  //         res.push(root.val);
  //         pre = root;
  //         root = null;
  //     } else {
  //         stack.push(root);
  //         stack.push(root.right);
  //         root = root.right.left;
  //     }
  //   }
  // }
  // return res;
};
