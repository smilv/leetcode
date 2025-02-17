/**
 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

 
示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"
 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 11
// 11
//  0
// 10
// 110

// 011
// 111
//1000

var addBinary = function (a, b) {
  let n = a.length - b.length;
  while (n !== 0) {
    if (n > 0) {
      b = "0" + b;
      n--;
    } else {
      a = "0" + a;
      n++;
    }
  }
  let index = a.length - 1,
    result = "",
    carry = 0;
  while (index > -1) {
    let plus = carry + Number(a[index]) + Number(b[index]);
    if (plus > 1) {
      carry = 1;
      result = (plus % 2) + result;
    } else {
      result = plus + result;
      carry = 0;
    }
    index--;
  }
  return carry ? "1" + result : result;
};
