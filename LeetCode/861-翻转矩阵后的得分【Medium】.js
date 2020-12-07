// 题目链接：https://leetcode-cn.com/problems/score-after-flipping-matrix/

/**
 * 思路：先保证每行最高位为1，然后遍历列
 * 如果列的0的数量大于1的数量，那么翻转列
 * 最后计算得分
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  for (let i = 0; i < A.length; i++) {
    // 每行最高位保证为1，不为1则翻转
    if (A[i][0] === 0) reverseRow(A, i);
  }
  let max = calc(A);
  for (let i = 1; i < A[0].length; i++) {
    let zeroCount = 0;
    // 统计0的数量
    for (let j = 0; j < A.length; j++) {
      if (A[j][i] === 0) zeroCount++;
    }
    // 当0的数量大于1的数量时翻转
    if (zeroCount * 2 > A.length) reverseCol(A, i);
  }
  // 计算得分返回
  max = Math.max(max, calc(A));
  return max;
};

function reverseRow(A, rowNo) {
  for (let i = 0; i < A[rowNo].length; i++) {
    A[rowNo][i] ^= 1;
  }
}

function reverseCol(A, colNo) {
  for (let i = 0; i < A.length; i++) {
    A[i][colNo] ^= 1;
  }
}

function calc(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += parseInt(A[i].join(''), 2);
  }
  return sum;
}

console.log(matrixScore([
[0,0,1,1],
[1,0,1,0],
[1,1,0,0]
]))

console.log(matrixScore([[0]]));
console.log(matrixScore([[0,0,0,0,0],[0,1,1,1,0],[1,0,1,1,0],[1,1,0,0,0],[1,0,1,1,1],[0,0,0,1,1],[0,1,1,0,0]]));
