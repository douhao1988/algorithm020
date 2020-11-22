// https://leetcode-cn.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // for(let i = 0; i < k; i++) {
  //     nums.unshift(nums.pop())
  // }

  // return nums.unshift(...nums.splice(nums.length - k));

  nums.splice(0, 0, ...nums.splice(nums.length - k));
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // => [5,6,7,1,2,3,4]
