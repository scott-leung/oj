// 题目链接：https://leetcode-cn.com/problems/rotate-array/

// 思路：这题在js层面，很好搞……比 Easy 还要 Easy

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  k = k % length;
  if (k > 0) {
    const arr = nums.splice(length - k, k);
    nums.splice(0, 0, ...arr);
  }
  console.log(nums);
};

rotate([1,2,3,4,5,6,7], 3);
rotate([-1,-100,3,99], 2);
rotate([1,2,3,4,5,6,7], 5);
