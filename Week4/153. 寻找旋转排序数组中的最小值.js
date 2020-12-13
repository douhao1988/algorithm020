// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // if (nums.length === 1) return nums[0];
  // nums.sort((a, b) => a - b);
  // return nums[0];

  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
};

findMin([3, 4, 5, 1, 2]);
