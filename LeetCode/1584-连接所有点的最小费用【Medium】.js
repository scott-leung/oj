// 题目链接：https://leetcode-cn.com/problems/min-cost-to-connect-all-points/

/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function (points) {
  //曼哈顿距离
  const dist = (x, y) => {
    return Math.abs(points[x][0] - points[y][0]) + Math.abs(points[x][1] - points[y][1]);
  }

  const n = points.length;
  const dsu = new DisjointSetUnion(n);
  const edges = []; //所有节点各两两连接的距离

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push([dist(i, j), i, j]);
    }
  }
  edges.sort((a, b) => a[0] - b[0]); //边排序

  let ret = 0, num = 1; //ret为总长度（结果）
  for (const [length, x, y] of edges) {
    if (dsu.unionSet(x, y)) {
      ret += length;
      num += 1;
      if (num === n) { //所有节点都有连接
        break;
      }
    }
  }
  return ret;
};

//并查集类
class DisjointSetUnion {
  constructor(n) {
    this.n = n;
    this.rank = new Array(n).fill(1); //以该节点为根的树有几层
    this.f = new Array(n).fill(0).map((element, index) => index); //parent
  }

  find(x) { //找父节点
    if (this.f[x] === x) {
      return x;
    }
    this.f[x] = this.find(this.f[x]);
    return this.f[x];
  }

  unionSet(x, y) { //合并
    let fx = this.find(x), fy = this.find(y);
    if (fx === fy) { //已连接，再连接就会形成环
      return false;
    }
    //基于rank优化的合并
    if (this.rank[fx] < this.rank[fy]) {
      [fx, fy] = [fy, fx];
    }
    this.rank[fx] += this.rank[fy];
    this.f[fy] = fx;
    return true;
  }
}

console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]));
