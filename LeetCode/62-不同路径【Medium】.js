// 题目链接：https://leetcode-cn.com/problems/unique-paths/

let hash = new Map();
hash.set('0|0', 1);
hash.set('1|0', 1);
hash.set('0|1', 1);
hash.set('1|1', 1);

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // uniquePaths(m, n) = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  const key1 = m + '|' + n;
  const key2 = n + '|' + m;
  if (hash.has(key1)) return hash.get(key1);
  let res = 0;
  if (m - 1 > 0) res += uniquePaths(m - 1, n);
  if (n - 1 > 0) res += uniquePaths(m, n - 1);
  hash.set(key1, res);
  hash.set(key2, res);
  return res;
};

console.log(uniquePaths(1, 1));
console.log(uniquePaths(2, 2));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(9, 9));