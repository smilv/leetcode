/*
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数
是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。
 
示例 1：

输入：x = 121
输出：true
示例 2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3：

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let l = 0,
    r = str.length - 1;
  while (l < r && str[l] === str[r]) {
    l++;
    r--;
  }
  return l < r ? false : true;
};

var isPalindrome = function (x) {
  return String(x) === String(x).split("").reverse().join("");
};

/*

 对于数字 1221，如果执行 1221 % 10，我们将得到最后一位数字 1，
 要得到倒数第二位数字，我们可以先通过除以 10 把最后一位数字从 1221 中移除，1221 / 10 = 122，
 再求出上一步结果除以 10 的余数，122 % 10 = 2，就可以得到倒数第二位数字。
 如果我们把最后一位数字乘以 10，再加上倒数第二位数字，1 * 10 + 2 = 12，就得到了我们想要的反转后的数字。
 
 由于整个过程我们不断将原始数字除以 10，然后给反转后的数字乘上 10，
 所以，当原始数字小于或等于反转后的数字时，就意味着我们已经处理了一半位数的数字了。
*/
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let revertedNumber = 0;
  //123321 1233 12 -> 123 123
  //12345 123 54 -> 12 543
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  //当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
