/**
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  

  示例 1：

  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶
  示例 2：

  输入：n = 3
  输出：3
  解释：有三种方法可以爬到楼顶。
  1. 1 阶 + 1 阶 + 1 阶
  2. 1 阶 + 2 阶
  3. 2 阶 + 1 阶

  提示：要达到第n步，你之前的步骤是什么？（想想步长）
  斐波那契数列
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  let n_1 = 1,
    n_2 = 1,
    res;
  for (let i = 2; i <= n; i++) {
    res = n_1 + n_2;
    n_1 = n_2;
    n_2 = res;
  }
  return res;
};

var climbStairs = function (n) {
  let n_1 = 0,
    n_2 = 1,
    res = 1;
  for (let i = 1; i <= n; i++) {
    res = n_1 + n_2;
    n_1 = n_2;
    n_2 = res;
  }
  return res;
};
