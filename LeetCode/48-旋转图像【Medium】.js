// 题目链接：https://leetcode-cn.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const N = matrix.length;
  const n = N - 1;
  // 行里只需要保证一半即可
  for (let i = 0, iLen = Math.floor(N / 2); i < iLen; i++) {
    // 列只需要保证超过一半即可
    for (let j = 0, jLen = Math.floor((N + 1) / 2); j < jLen; j++) {  
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }

  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]));

/*
给定 matrix =
[
  [ 1, 2, 3, 4, 5,26],
  [ 6, 7, 8, 9,10,27],
  [11,12,13,14,15,28],
  [16,17,18,19,20,29],
  [21,22,23,24,25,30],
  [31,32,33,34,35,36]
], 
n = 5

[i, j] => [j, n-i]
[j, n-i] => [n-i, n-j]
[n-i, n-j] => [n-j, i]
[n-j, i] => [i, j]

8
[1, 2] => [2, 4]
[2, 4] => [4, 3]
[4, 3] => [3, 1]
[3, 1] => [1, 2]

[0, 0] => [0, n]
[0, n] => [n, n]
[n, n] => [n, 0],
[n, 0] => [0, 0]

[0, 2] => [2, n]
[2, n] => [n, 1(3-2)]
[n, 1] => [1(3-2), 0]
[1, 0] => [0, 2]


原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-image
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
