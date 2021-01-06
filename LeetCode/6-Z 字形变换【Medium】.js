// 题目链接：https://leetcode-cn.com/problems/zigzag-conversion/

// 做法一：模拟，拼接，520ms，打败5% 😂
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  let length = s.length;
  let idx = 0;
  while (idx < length) {
    for (let i = 0; i < numRows; i++) {
      arr[i].push(s[idx++] || '');
    }
    for (let i = 0; i < numRows - 2; i++) {
      for (let j = numRows - 1; j >= 0; j--) {
        if (i + j === numRows - 2) arr[j].push(s[idx++] || '');
        else arr[j].push('');
      }
    }
  }
  return arr.map(v => v.join('')).join('');
};

console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('LEETCODEISHIRING', 4));
/*
L   I   C   Y
E  ES  GA  PO
E D H N N L U
TO  II  IE
C   R   H
*/
console.log(convert('LEETCODEISHIRING', 5));
console.log(convert('LEETCODEISHIRINGCANIHELPYOU', 5));
console.log(convert('ABCD', 1));
