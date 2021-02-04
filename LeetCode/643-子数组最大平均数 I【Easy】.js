// 题目链接：https://leetcode-cn.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  k = Math.min(nums.length, k);
  let sum = 0;
  let max = -Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = Math.max(max, sum);
  for (let i = k; i < nums.length; i++) {
    const before = nums[i - k];
    const now = nums[i];
    sum += now - before;
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
