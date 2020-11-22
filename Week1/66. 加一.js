/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let leng = digits.length;
  // for(let i = leng - 1; i >= 0; i--) {
  //     digits[i] = (digits[i] + 1) % 10;
  //     if (digits[i]) return digits
  // }
  // digits.unshift(1);
  // return digits;

  if (digits[leng - 1] === 9) {
    digits[i] = 0;
    for (let i = leng - 2; i >= 0; i--) {
      digits[i] = (digits[i] + 1) % 10;
      if (digits[i]) return digits;
    }
  } else {
    digits[leng - 1]++;
    return digits;
  }
};
