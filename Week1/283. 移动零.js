// https://leetcode-cn.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // for (let i = nums.length; i--;) {
  //     if (nums[i] === 0) {
  //         nums.splice(i, 1);
  //         nums.push(0)
  //     }
  // }

  // var idx = 0;
  // for (var i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) {
  //         nums[idx] = nums[i];
  //         nums[i] = idx === i ? nums[i] : 0;
  //         idx++;
  //     }
  // }

  // let j = 0;
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != 0) {
  //         [nums[j++], nums[i]] = [nums[i], nums[j]];
  //     }
  // }

  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }

  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
};

moveZeroes([0, 1, 0, 3, 12]); // => [1,3,12,0,0]
