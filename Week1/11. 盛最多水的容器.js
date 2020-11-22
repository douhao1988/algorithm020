/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // let maxArea = 0
  // for(let i = 0; i < height.length - 1; i++) {
  //     for(let k = i + 1; k < height.length; k++) {
  //         const area = (k - i) * Math.min(height[i], height[k])
  //         maxArea = Math.max(maxArea, area)
  //     }
  // }
  // return maxArea;

  // let max = 0;
  // for(let i = 0, j = height.length - 1; i < j;) {
  //     const minHeight = height[i] < height[j]? height[i++]: height[j--];
  //     max = Math.max(max, (j - i + 1) * minHeight)
  // }
  // return max;

  let max = 0,
    i = 0;
  j = height.length - 1;
  while (i < j) {
    max = Math.max(
      max,
      (j - i) * (height[i] < height[j] ? height[i++] : height[j--])
    );
  }
  return max;
};
