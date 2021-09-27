/*
 * @Description: 无重复字符的最长子串
 * @Autor: zhaobin <zhaobin@googutspirits.com>
 * @Date: 2021-09-27 15:25:24
 * @LastEditors: zhaobin
 * @LastEditTime: 2021-09-27 18:15:56
 */

/*
示例:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

输入: s = ""
输出: 0
*/

/**
 * @param {string} s
 * @return {number}
 */
var s = "pwwkew";
var lengthOfLongestSubstring = function(s) {
  let result = "";
  let length = s.length;
  for (let i = 0; i < s.length; i++) {
    let child = s[i],
      k = i + 1;
    while (k < length && child.indexOf(s[k]) < 0) {
      child += s[k];
      k++;
    }
    if (child.length > result.length) {
      result = child;
    }
  }
  return result;
};
console.log(lengthOfLongestSubstring(s));
