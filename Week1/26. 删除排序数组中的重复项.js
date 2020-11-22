// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let k = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[k] !== nums[i]) {
  //         nums[++k] = nums[i]
  //     }
  // }
  // return ++k;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

removeDuplicates([1, 1, 2]); // => [1,2]
