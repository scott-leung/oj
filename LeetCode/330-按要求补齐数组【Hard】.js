// 题目链接：https://leetcode-cn.com/problems/patching-array/

// 对于正整数 x，如果区间 [1,x-1][1,x−1] 内的所有数字都已经被覆盖，且 xx 在数组中，则区间 [1,2x-1][1,2x−1] 内的所有数字也都被覆盖。

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  const length = nums.length;
  // 从1开始
  let x = 1;
  let index = 0;
  let patchCount = 0;

  while (x <= n) {
    // 如果原有的 <x 的数字还没用完
    if (index < length && x >= nums[index]) {
      // 那么用掉这个数字，[1, x+nums[index] - 1] 的范围就可以全部被覆盖了
      x += nums[index++];
    } else {
      // 否则就要补充这个数字，补充后范围就翻倍了
      patchCount++;
      // x += x;
      // 等同于 x = x << 1; 但 js 位运算太慢，不建议用
      x *= 2;
    }
  }

  return patchCount;
};

console.log(minPatches([1, 3], 6));
console.log(minPatches([1, 5, 10], 20));
console.log(minPatches([1, 5, 10], 60));
