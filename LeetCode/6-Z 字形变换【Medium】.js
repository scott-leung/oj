// 题目链接：https://leetcode-cn.com/problems/zigzag-conversion/

// 做法一：模拟，拼接，520ms，打败5% 😂
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function(s, numRows) {
//   if (numRows === 1) return s;
//   let arr = [];
//   for (let i = 0; i < numRows; i++) {
//     arr.push([]);
//   }

//   let length = s.length;
//   let idx = 0;
//   while (idx < length) {
//     for (let i = 0; i < numRows; i++) {
//       arr[i].push(s[idx++] || '');
//     }
//     for (let i = 0; i < numRows - 2; i++) {
//       for (let j = numRows - 1; j >= 0; j--) {
//         if (i + j === numRows - 2) arr[j].push(s[idx++] || '');
//         else arr[j].push('');
//       }
//     }
//   }
//   return arr.map(v => v.join('')).join('');
// };

// 做法二：规律
// var convert = function(s, numRows) {
//   if (numRows === 1) return s;
//   let res = '';
//   const space = (numRows - 1) * 2 || 1;
//   for (let i = 0; i < numRows; i++) {
//     let idx = i;
//     let prevSpace = i * 2;
//     while (idx < s.length) {
//       res += s[idx];
//       idx += space;
//       if (i > 0 && i < numRows - 1) {
//         res += s[idx - prevSpace] || '';
//       }
//     }
//   }
//   return res;
// }

// 做法三：简单遍历拼接
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push('');
  }

  let step = -1;
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    arr[idx] += s[i];
    if (idx === 0 || idx === numRows - 1) step *= -1;
    idx += step;
  }

  return arr.join('');
}

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
