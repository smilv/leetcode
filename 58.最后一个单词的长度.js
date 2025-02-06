/**

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

示例 1：

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为 5。
示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为 4。
示例 3：

输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为 6 的“joyboy”。

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] !== " ") {
      length++;
    } else if (length > 0) {
      break;
    }
  }
  return length;
};

var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (s[end] === " ") {
    end--;
  }
  let start = end;
  while (s[start] !== " " && s[start] !== undefined) {
    start--;
  }
  return end - start;
};
