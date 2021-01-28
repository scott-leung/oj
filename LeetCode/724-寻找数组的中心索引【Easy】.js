// 题目链接：https://leetcode-cn.com/problems/find-pivot-index/

// 思路：先把总数算出来，然后一个个数尝试去除，看之前相加的数能不能达到总数的一半，能就返回坐标

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
