// 题目链接：https://leetcode-cn.com/problems/assign-cookies/

function sortMin2Max(a, b) {
  return a - b;
}

// 做法一：排序后一个个数
// 124ms，打败43%
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function (g, s) {
//   g.sort(sortMin2Max);
//   s.sort(sortMin2Max);
//   let count = 0;

//   let childIdx = 0;
//   let cookieIdx = 0;
//   while (childIdx < g.length && cookieIdx < s.length) {
//     const child = g[childIdx];
//     const cookie = s[cookieIdx];
//     if (cookie >= child) {
//       count++;
//       childIdx++;
//       cookieIdx++;
//     } else {
//       cookieIdx++;
//     }
//   }

//   return count;
// };

// 做法二：基于做法一优化。
// 116ms，打败76%
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort(sortMin2Max);
  s.sort(sortMin2Max);

  let childIdx = 0;
  let cookieIdx = 0;
  while (childIdx < g.length && cookieIdx < s.length) {
    const child = g[childIdx];
    const cookie = s[cookieIdx];
    if (cookie >= child) {
      childIdx++;
    }
    cookieIdx++;
  }

  return childIdx;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([], [1, 2, 3]));
console.log(findContentChildren([], []));
console.log(findContentChildren([1,1,1,1], [2,2,0]));
console.log(findContentChildren([6, 8, 10, 2, 2, 2, 1, 2, 3], [10, 8, 9, 6, 5, 4, 1, 1]));
