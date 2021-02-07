// 题目链接：https://leetcode-cn.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (++count > 1) return false;
      if (i > 0 && nums[i + 1] < nums[i - 1]) nums[i + 1] = nums[i];
    }
  }
  return true;
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
console.log(checkPossibility([3, 4, 2, 3]));
console.log(checkPossibility([5, 7, 1, 8]));
