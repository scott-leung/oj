// 题目链接：https://leetcode-cn.com/problems/remove-duplicate-letters/

// 思路：单调栈，差不多

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let count = {};
  let vis = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    count[c] = (count[c] + 1) || 1;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!vis[c]) {
      let last = stack[stack.length - 1];
      while (stack.length && last > c) {
        if (!count[last]) break;
        stack.pop();
        vis[last] = false;
        last = stack[stack.length - 1];
      }
      stack.push(c);
      vis[c] = true;
    }
    count[c]--;
  }
  return stack.join('');
};

console.log(removeDuplicateLetters('cbacdcbc'));
console.log(removeDuplicateLetters('bcabc'));
console.log(removeDuplicateLetters('sfjilwrgjiopuizxjcklzjxlkcjwqeiouripowqpoeipozkljfkjvklsd'));
