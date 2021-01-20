// 题目链接：https://leetcode-cn.com/problems/maximum-product-of-three-numbers/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const len = nums.length;
  // 方法一：排序取前三
  nums.sort((a, b) => a - b);
  // console.log(JSON.stringify(nums));
  return Math.max(
    nums[0] * nums[1] * nums[len - 1],
    nums.slice(len - 3, len).reduce((res, v) => res * v)
  );
};

console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-100, -98, -1, -2, -3, -4]));
console.log(maximumProduct([-100, -98, -1, -2, 3, -4]));
console.log(maximumProduct([-100, -98, -1, -2, 3, 4]));
console.log(maximumProduct([-710, -107, -851, 657, -14, -859, 278, -182, -749, 718, -640, 127, -930, -462, 694, 969, 143, 309, 904, -651, 160, 451, -159, -316, 844, -60, 611, -169, -73, 721, -902, 338, -20, -890, -819, -644, 107, 404, 150, -219, 459, -324, -385, -118, -307, 993, 202, -147, 62, -94, -976, -329, 689, 870, 532, -686, 371, -850, -186, 87, 878, 989, -822, -350, -948, -412, 161, -88, -509, 836, -207, -60, 771, 516, -287, -366, -512, 509, 904, -459, 683, -563, -766, -837, -333, 93, 893, 303, 908, 532, -206, 990, 280, 826, -13, 115, -732, 525, -939, -787]));
