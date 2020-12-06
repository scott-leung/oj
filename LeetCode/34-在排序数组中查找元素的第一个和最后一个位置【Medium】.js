// 题目链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// 二分查找经典~

function divSearch(nums, target, min = true) {
  let left = 0;
  let right = nums.length - 1;
  let res = -1;
  while (left <= right) {
    let piv = parseInt(left + (right - left) / 2);
    // console.log(`left[${left}], piv[${piv}], right[${right}]`);
    if (nums[piv] > target) {
      right = piv - 1;
    } else if (nums[piv] < target) {
      left = piv + 1;
    } else {
      res = piv;
      min ? (right = piv - 1) : (left = piv + 1);
    }
  }
  return res;
}

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function (nums, target) {
  return [divSearch(nums, target), divSearch(nums, target, false)];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8));
