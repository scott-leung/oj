// 题目链接：https://leetcode-cn.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums.length) return -1;
  let sum = nums.reduce((s, v) => s += v);
  let tSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const half = (sum - num) / 2;
    // console.log(`sum[${sum}], num[${num}], half[${half}], tSum[${tSum}]`);
    if (tSum === half) return i;
    tSum += num;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([0, 0, 0, 0, 1]));
