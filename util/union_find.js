class UnionFind {

  constructor(n) {
    // 使用 Uint32Array 的原因是它会自动初始化数组值为0
    this.parents = new Uint32Array(n);
    this.ranks = new Uint32Array(n);
    while (n--) this.parents[n] = n;
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
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
