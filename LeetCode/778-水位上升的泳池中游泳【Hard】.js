// 题目链接：https://leetcode-cn.com/problems/swim-in-rising-water/

class UnionFind {

  constructor(n) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  /**
   * 查找根
   * @param {number} x 
   * @returns {number}
   */
  root(x) {
    const parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  }

  /**
   * 是否链接
   * @param {number} x 
   * @param {number} y 
   * @returns {boolean}
   */
  isConnected(x, y) {
    return this.root(x) === this.root(y);
  }

  /**
   * 连接
   * @param {number} p 
   * @param {number} q 
   */
  union(p, q) {
    const parent = this.parent;
    if (this.isConnected(p, q)) {
      return ;
    }
    parent[this.root(p)] = this.root(q);
  }
}

function getHeight(i, j, n) {
  return i * n + j;
}

function inArea(i, j, n) {
  return i >= 0 && i < n && j >= 0 && j < n;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const n = grid.length;
  const len = n * n;
  const direct = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let height = new Array(len);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      height[grid[i][j]] = getHeight(i, j, n);
    }
  }

  let unionFind = new UnionFind(len);
  for (let i = 0; i < len; i++) {
    const x = Math.floor(height[i] / n);
    const y = height[i] % n;

    for (let j = 0; j < direct.length; j++) {
      const d = direct[j];
      const newX = x + d[0];
      const newY = y + d[1];

      // console.log(newX, newY, n);
      if (inArea(newX, newY, n) && grid[newX][newY] <= i) {
        unionFind.union(height[i], getHeight(newX, newY, n));
      }

      if (unionFind.isConnected(0, len - 1)) {
        return i;
      }
    }
  }
  return -1;
};

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
);
console.log(
  swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ])
);
