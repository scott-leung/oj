// 题目链接：https://leetcode-cn.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let res = [];
  const length = nums.length;
  for (let i = 0; i < k; i++) {
    const num = nums[i];
    while (queue.length && queue[queue.length - 1] < num) queue.pop();
    queue.push(num);
  }
  res.push(queue[0]);
  for (let i = k, j = 0; i < length; i++, j++) {
    const num = nums[i];
    const numBefore = nums[j];
    if (numBefore === queue[0]) queue.shift();
    while (queue.length && queue[queue.length - 1] < num) queue.pop();
    queue.push(num);
    res.push(queue[0]);
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([9, 11], 2));
console.log(maxSlidingWindow([4, -2], 2));
