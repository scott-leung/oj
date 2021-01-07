// 题目链接：https://leetcode-cn.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const item = flowerbed[i];
    const last = flowerbed[i - 1] || 0;
    const next = flowerbed[i + 1] || 0;
    if (item + last + next === 0) {
      flowerbed[i] = 1;
      if (--n <= 0) return true;
    }
  }
  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0, 1, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0], 2));
console.log(canPlaceFlowers([1, 0, 0, 1, 0, 0, 0], 2));
