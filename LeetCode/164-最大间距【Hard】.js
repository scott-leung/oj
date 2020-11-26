// https://leetcode-cn.com/problems/maximum-gap/

// 年轻人不讲码德，上来先sort，再处理。
// 但其实跟官方的样例没差。

// 这个sort，运行时间96ms，内存消耗39.2MB。
// 官方js样例，运行时间112ms，内存消耗40.3MB。[手动狗头]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
      if (nums[i + 1] > nums[i]) {
          max = Math.max(max, nums[i + 1] - nums[i]);
      }
  }
  return max;
};
