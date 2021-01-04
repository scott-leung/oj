// 题目链接： https://leetcode-cn.com/problems/non-overlapping-intervals/

/*
做法一：
思路：通过dp求最大不重叠区间数，然后总区间数减去最大不重叠区间数，得出答案
先对区间进行端点排序，然后再求解。
设dp数组中每个初始值为1，即最大不重叠区间数为1。
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const length = intervals.length;
  if (length <= 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let dp = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    const b = intervals[i];
    for (let j = 0; j < i; j++) {
      const a = intervals[j];
      // 当前区间的左端点大于或者等于之前的区间的右端点
      if (b[0] >= a[1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return length - dp[length - 1];
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
