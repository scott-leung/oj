// 题目链接：https://leetcode-cn.com/problems/reverse-integer/

// 很简单，没啥好说的。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_INT_Z = Math.pow(2, 31) - 1;
  const MAX_INT_F = -Math.pow(2, 31);
  x = x.toString().split('');
  let sign = 1;
  let max = MAX_INT_Z;
  if (x[0] === '-') {
      sign = -1;
      x = x.slice(1);
      max = MAX_INT_F;
  }
  const res = parseInt(x.reverse().join(''));
  return res > sign * max ? 0 : sign * res;
};