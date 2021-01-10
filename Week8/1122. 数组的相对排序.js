/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let hash = {},
    res = [];
  for (let num of arr1) {
    hash[num] = hash[num] != null ? hash[num] + 1 : 1;
  }
  for (let num of arr2) {
    while (hash[num] > 0) {
      res.push(num);
      hash[num] -= 1;
    }
    delete hash[num];
  }
  for (let num in hash) {
    while (hash[num] > 0) {
      res.push(num);
      hash[num] -= 1;
    }
  }
  return res;
};
