// 题目链接：https://leetcode-cn.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const item = grid[i][j];
      if (item === '1') {
        sum++;
        dfsClean(grid, i, j);
      }
    }
  }
  return sum;
};

function dfsClean(arr, i, j) {
  if (arr[i][j] === '0') return ;
  arr[i][j] = '0';
  const dt = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (let k = 0; k < dt.length; k++) {
    const d = dt[k];
    const newI = i + d[0];
    const newJ = j + d[1];
    if (newI >= 0 && newI < arr.length && newJ >= 0 && newJ < arr[newI].length) {
      dfsClean(arr, newI, newJ);
    }
  }
}

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));
