/*
示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    for (let k = 0; k < res.length; k++) {
      if (res[k] !== strs[i][k]) {
        res = res.slice(0, k);
        break;
      }
    }
  }
  return res;
};
