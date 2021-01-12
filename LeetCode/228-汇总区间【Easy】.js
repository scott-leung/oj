// 题目链接：https://leetcode-cn.com/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // 用于触发结束条件
  nums.push('$');
  const length = nums.length;
  let res = [];
  let beginNum = '';
  let prevNum = '';
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    // 如果区间断开不连续了
    if (num - 1 !== prevNum) {
      // 看下是否非初始阶段（初始阶段beginNum还没赋值）
      if (beginNum !== '') {
        // 非初始阶段情况下，分两种情况，一种是单个数区间
        if (prevNum === beginNum) {
          res.push(beginNum + '');
        } else {
          // 另一种是“开始->结束”区间
          res.push(beginNum + '->' + prevNum);
        }
      }
      // 但凡是断开不连续的，参数需要重新赋值为新的开始
      beginNum = prevNum = num;
    } else {
      prevNum = num;
    }
  }
  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0]));
