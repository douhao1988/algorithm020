// https://leetcode-cn.com/problems/lemonade-change/
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (let i = 0; i < bills.length; i++) {
    const item = bills[i];
    if (item === 5) {
      five++;
    } else if (item === 10) {
      if (five === 0) return false;
      ten++;
      five--;
    } else if (item === 20) {
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
