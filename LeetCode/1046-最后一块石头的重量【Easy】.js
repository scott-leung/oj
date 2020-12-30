// 题目链接：https://leetcode-cn.com/problems/last-stone-weight/

// 做法一：暴力解法
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const m2s = (a, b) => a - b;
  while (stones.length > 1) {
    stones.sort(m2s);
    const a = stones.pop();
    const b = stones.pop();
    if (a === b) continue;
    stones.push(Math.round(Math.abs(a - b)));
  }
  return stones.length ? stones.pop() : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));
