// 题目链接：https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length <= 1) return nums.length;
  const len = nums.length;
  let max = 1;
  let tempMax = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      if (++tempMax > max) {
        max = tempMax;
      }
    } else {
      tempMax = 1;
    }
  }
  return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([]));
