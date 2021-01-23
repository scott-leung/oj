// 题目链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  K = K.toString().split('');
  let jw = 0;
  let res = [];
  while (A.length || K.length || jw) {
    const a = A.pop() || 0;
    const b = K.pop() * 1 || 0;
    const sum = a + b + jw;
    jw = Math.floor(sum / 10);
    res.unshift(sum % 10);
  }
  return res;
};

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1));
