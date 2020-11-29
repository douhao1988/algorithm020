/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root, res = []) {
  if (!root) return [];

  let p = [root];
  while (p.length) {
    const node = p.shift();
    const {val, children} = node;
    res.push(val);
    p.unshift(...children);
  }
  return res;
};
