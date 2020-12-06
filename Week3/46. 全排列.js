/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = [];

  function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
      ans.push(nums.slice(0));
      return;
    }
    for (let i = n; i < nums.length; i++) {
      [nums[i], nums[n]] = [nums[n], nums[i]];
      backtrack(nums, res, n + 1);
      [nums[i], nums[n]] = [nums[n], nums[i]];
    }
  }

  backtrack(nums, ans);
  return ans;
};
