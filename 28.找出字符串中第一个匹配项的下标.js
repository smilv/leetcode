/**

示例 1：

输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
示例 2：

输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。


// mississippi
// issip

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    for (let k = 0; k < needle.length; k++) {
      if (haystack[i + k] === needle[k]) {
        if (k === needle.length - 1) {
          return i;
        }
      } else {
        break;
      }
    }
  }
  return -1;
};

var strStr = function (haystack, needle) {
  let h_left = 0,
    n_left = 0;
  while (h_left + needle.length <= haystack.length && n_left < needle.length) {
    if (haystack[h_left + n_left] === needle[n_left]) {
      n_left++;
    } else {
      n_left = 0;
      h_left++;
    }
  }
  return n_left === needle.length ? h_left : -1;
};
