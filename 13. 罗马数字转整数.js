/**
 给定一个罗马数字，将其转换成整数。

 

  示例 1:

  输入: s = "III"
  输出: 3
  示例 2:

  输入: s = "IV"
  输出: 4
  示例 3:

  输入: s = "IX"
  输出: 9
  示例 4:

  输入: s = "LVIII"
  输出: 58
  解释: L = 50, V= 5, III = 3.
  示例 5:

  输入: s = "MCMXCIV"
  输出: 1994
  解释: M = 1000, CM = 900, XC = 90, IV = 4.

 */

const hashMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = hashMap.get(s[i]),
      next = hashMap.get(s[i + 1]) || 0;
    if (cur < next) {
      res += next - cur;
      i++;
    } else {
      res += cur;
    }
  }
  return res;
};


/*

通常情况下，罗马数字中小的数字在大的数字的右边。若输入的字符串满足该情况，那么可以将每个字符视作一个单独的值，累加每个字符对应的数值即可。
例如 XXVII 可视作 X+X+V+I+I=10+10+5+1+1=27。

若存在小的数字在大的数字的左边的情况，根据规则需要减去小的数字。对于这种情况，我们也可以将每个字符视作一个单独的值，若一个数字右侧的数字比它大，则将该数字的符号取反。
例如 XIV 可视作 X−I+V=10−1+5=14。

 */
var romanToInt = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = hashMap.get(s[i]),
      next = hashMap.get(s[i + 1]) || 0;
    if (cur < next) {
      res -= cur;
    } else {
      res += cur;
    }
  }
  return res;
};

console.log(romanToInt("MCMXCIV"));
