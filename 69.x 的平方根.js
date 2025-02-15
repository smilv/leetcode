/**
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2
示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let res = 0;
  while (res * res <= x) {
    res++;
  }
  return res - 1;
};

/**
 * @param {number} x
 * @return {number}
 */
//1 2 3 4 5
var mySqrt = function (x) {
  let l = 0,
    r = x;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r;
};
