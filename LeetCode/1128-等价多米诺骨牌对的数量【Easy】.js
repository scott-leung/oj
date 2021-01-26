// 题目链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let map = new Map();
  let sum = 0;
  for (let i = 0; i < dominoes.length; i++) {
    const item = dominoes[i];
    const str = item.join('');
    const reverseStr = item.reverse().join('');
    if (map.has(str)) {
      const tempSum = map.get(str);
      sum += tempSum + 1;
      map.set(str, tempSum + 1);
      map.set(reverseStr, tempSum + 1);
    } else {
      map.set(str, 0);
      map.set(reverseStr, 0);
    }
  }
  return sum;
};

console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]));
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [3, 4]]));
console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [1, 2]]));
console.log(numEquivDominoPairs([[1, 2], [3, 4], [5, 6], [7, 8]]));
console.log(numEquivDominoPairs([[1], [1], [1], [1]]));
console.log(numEquivDominoPairs([[1], [2], [3], [4]]));
console.log(numEquivDominoPairs([]));
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]])); // 3
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 2], [1, 2], [2, 1]])); // 10
console.log(numEquivDominoPairs([[1, 2], [1, 2], [1, 2], [1, 2]])); // 6
