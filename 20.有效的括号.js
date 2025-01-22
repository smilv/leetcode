/*

示例 1：
输入：s = "()"
输出：true

示例 2：
输入：s = "()[]{}"
输出：true

示例 3：
输入：s = "(]"
输出：false

示例 4：
输入：s = "([])"
输出：true

*/

// ()
// (())
// ([])()
// ([)]
// ()()()
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hashMap = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  for (let i = 0; i < s.length - 1; i++) {
    if (hashMap.get(s[i]) === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2);
      i = -1;
    }
  }
  return s.length === 0 ? true : false;
};

var isValid = function (s) {
  if (s % 2) return false;
  const hashMap = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stack = [];
  for (let ch of s) {
    if (hashMap.get(stack[stack.length - 1]) === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
};
