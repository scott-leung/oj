// 题目链接：https://leetcode-cn.com/problems/smallest-string-with-swaps/

const { UnionFind } = require('../util');

// 做法一：插入映射关系为 下标
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const len = s.length;
  // 并查集数量是对标字符串下标数量的
  let unionFind = new UnionFind(len);
  let i = pairs.length;
  let idxMap = new Map();
  // 根据 pairs 数组构建并查集
  while (i--) {
    unionFind.union(...pairs[i]);
  }

  // 根据并查集，构造下标到可替换字符集合的映射关系
  while (i++ < len) {
    const rootI = unionFind.find(i);
    if (!idxMap.has(rootI)) idxMap.set(rootI, [i]);
    else idxMap.get(rootI).push(i);
  }

  function charMin2Max(a, b) {
    return s.charCodeAt(a) - s.charCodeAt(b);
  }

  let res = new Array(len);
  // 根据映射关系重新构造最小字典序字符串
  idxMap.forEach(idxList => {
    // 先对可替换字符下标集合按下标对应字符的字典序进行排序
    const sortIdxList = idxList.slice().sort(charMin2Max);
    // 然后对排序前后进行字符串置换
    for (let i = 0; i < idxList.length; i++) {
      res[idxList[i]] = s[sortIdxList[i]];
    }
  });

  return res.join('');
};

// 做法二：插入映射关系为字符 -- 超时
// /**
//  * @param {string} s
//  * @param {number[][]} pairs
//  * @return {string}
//  */
// var smallestStringWithSwaps = function (s, pairs) {
//   const len = s.length;
//   // 并查集数量是对标字符串下标数量的
//   let unionFind = new UnionFind(len);
//   let i = pairs.length;
//   let idxMap = new Map();
//   // 根据 pairs 数组构建并查集
//   while (i--) {
//     unionFind.union(...pairs[i]);
//   }

//   // 根据并查集，构造下标到可替换字符集合的映射关系
//   while (i++ < len) {
//     const rootI = unionFind.find(i);
//     if (!idxMap.has(rootI)) idxMap.set(rootI, []);
//     idxMap.get(rootI).push(s[i]);
//   }

//   function charMin2Max(a, b) {
//     return a.charCodeAt() - b.charCodeAt();
//   }

//   let res = '';
//   // 根据映射关系重新构造最小字典序字符串
//   idxMap.forEach(idxList => {
//     idxList.sort(charMin2Max);
//   });

//   for (let i = 0; i < len; i++) {
//     const rootI = unionFind.find(i);
//     res += idxMap.get(rootI).shift();
//   }

//   return res;
// };

console.log(smallestStringWithSwaps('dcab', [[0, 3], [1, 2]]));
console.log(smallestStringWithSwaps('dcab', [[0, 3], [1, 2], [0, 2]]));
console.log(smallestStringWithSwaps('cab', [[0, 1], [1, 2]]));
