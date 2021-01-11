class UnionFind {
  
  constructor(n) {
    this.parents = [];
    this.ranks = [];
    while (n--) this.parents[n] = n;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      const t = this.ranks[rootX] - this.ranks[rootY];
      if (t <= 0) {
        this.parents[rootX] = rootY;
        if (t === 0) this.ranks[rootY]++;
      } else
        this.parents[rootY] = rootX;
    }
  }

  find(x) {
    while (x !== this.parents[x]) x = this.parents[x];
    return x;
  }
}

module.exports = UnionFind;
