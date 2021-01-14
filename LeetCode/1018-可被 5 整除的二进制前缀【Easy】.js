// 题目链接：https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  let res = [];
  let num = 0;
  let length = A.length;
  let i = 0;
  while (i < length) {
    num = (num * 2 + A[i++]) % 10;
    res.push(num % 5 === 0);
  }
  return res;
};

console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
console.log(prefixesDivBy5([0, 1, 0, 1]));
