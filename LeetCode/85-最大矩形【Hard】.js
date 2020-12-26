// 题目链接：https://leetcode-cn.com/problems/maximal-rectangle/

let max = 0;

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let dp = new Array(row).fill(0).map(v => new Array(col).fill(0));
};
