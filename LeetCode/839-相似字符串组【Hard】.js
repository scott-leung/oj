// 题目链接：https://leetcode-cn.com/problems/similar-string-groups/

const { UnionFind } = require('../util');

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  const length = strs.length;
  const unionFind = new UnionFind(length);
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (isSimilar(strs[i], strs[j])) {
        unionFind.union(i, j);
      }
    }
  }
  return unionFind.getGroupCount();
};

/**
 * 判断字符串相似 - 两个字符互换
 * @param {string} a 
 * @param {string} b 
 */
function isSimilar(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] && ++count > 2) return false; 
  }
  return true;
}

console.log(numSimilarGroups(['tars', 'rats', 'arts', 'star']));
console.log(numSimilarGroups(['omv', 'ovm']));
