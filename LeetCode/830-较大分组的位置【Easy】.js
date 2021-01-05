// 题目链接：https://leetcode-cn.com/problems/positions-of-large-groups/

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let lastC = '';
  let lastI = -1;
  let res = [];
  // 用于执行完最后一个字符的检查
  s += '$';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c !== lastC) {
      if (i - lastI > 2) {
        res.push([lastI, i - 1]);
      }
      lastI = i;
      lastC = c;
    }
  }
  return res;
};

console.log(largeGroupPositions('abbxxxxzzy'));
console.log(largeGroupPositions('abc'));
console.log(largeGroupPositions('aaa'));
console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
