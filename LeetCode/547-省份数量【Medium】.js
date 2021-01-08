// 题目链接：https://leetcode-cn.com/problems/number-of-provinces/
// 相似题目：200

// 思路：dfs污染，找到一个，记录，然后开始蔓延污染。bfs类似。

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let sum = 0;
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[i].length; j++) {
      const item = isConnected[i][j];
      if (item) {
        sum++;
        dfsClean(isConnected, i, j);
      }
    }
  }
  return sum;
};

function dfsClean(arr, i, j) {
  if (!arr[i][j]) return ;
  arr[i][j] = 0;
  arr[j][i] = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[i][k]) dfsClean(arr, i, k);
    if (arr[j][k]) dfsClean(arr, j, k);
  }
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]));
console.log(findCircleNum([
  [1,0,0,1],
  [0,1,1,0],
  [0,1,1,1],
  [1,0,1,1]
]));

