// 题目链接：https://leetcode-cn.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) return true;
    hash.add(nums[i]);
  }
  return false;
};