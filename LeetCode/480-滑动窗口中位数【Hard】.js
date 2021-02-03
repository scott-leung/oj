// 题目链接：https://leetcode-cn.com/problems/sliding-window-median/

const { PriorityQueue } = require('../util');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  if (!k || !nums.length) return [];
  let pq = new PriorityQueue();
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    pq.add(nums[i]);
    if (i >= k) pq.del(nums[i - k]); // 窗口左边移动
    if (i >= k - 1) {  // 当窗口大小为k时, 就可以把中位数加入结果数组了
      let val = pq.getMid(k & 1);
      list.push(val);
    }
  }
  return list;
};

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
