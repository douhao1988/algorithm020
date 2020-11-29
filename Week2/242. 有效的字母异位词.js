// 说明：你可以假设字符串只包含小写字母
// 有效字母异位词 等价于 「两个字符串排序后相等」

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 第一种：
  // 通过排序两个字符串，并且比较两个字符串是否完全相等
  // return (s.length === t.length && [...s].sort().join('') === [...t].sort().join(''));

  // 第二种：
  // 使用哈希方式，将每个字母的作为 hashmap 的 key 值，一个增加 1 一个 减去 1
  // 最后通过数组方法 every 判断是否 hashmap 中所有 key 的值都为 0
  // const map = {};
  // s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
  // t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
  // return Object.keys(map).every(k => map[k] === 0);

  // 第三种：
  // 英文字母的数量为26个。
  // 通过 codePointAt() 方法返回 一个 Unicode 编码点值的非负整数
  // 与第二种有异曲同工之妙，一加一减，判断对应位置的值是否小于0

  if (s.length !== t.length) return false;

  const array = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    array[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }

  for (let k = 0; k < t.length; k++) {
    array[t.codePointAt(k) - 'a'.codePointAt(0)]--;
    if (array[t.codePointAt(k) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }

  return true;
};
