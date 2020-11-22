// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = target - nums[i];
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] === diff) {
        return [i, k];
      }
    }
  }

  // let result = {}
  // for(let i = 0; i < nums.length; i++) {
  //     const diff = target - nums[i];
  //     if (result[diff] !== undefined) {
  //         return [result[diff], i]
  //     }
  //     result[nums[i]] = i;
  // }
};

twoSum([2, 7, 11, 15], 9); // => [0,1]
