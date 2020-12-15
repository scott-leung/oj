// 题目链接：https://leetcode-cn.com/problems/monotone-increasing-digits/

/**
 * 贪心，最理想的就是源数字N。
 * 我的思路是把数字变成单数字数组，然后从后往前遍历，遇到后面≥前面的，
 * 直接塞进结果数组里，但是后面＜前面的话，那么就要把前一个数字 -1，
 * 然后之前塞进结果数组的都设为9，最后把结果拼接一下
 */

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  N = N.toString().split('');
  let res = [];
  const len = N.length;
  for (let i = len - 1; i > 0; i--) {
    let now = N[i] * 1;
    let next = N[i - 1] * 1;
    if (now < next) {
      N[i - 1] = next - 1;
      setNine(res);
      res.unshift(9);
    } else {
      res.unshift(now);
    }
  }
  // 塞进最后一个，不用对比和修改了，0会在转数字时自动被处理
  res.unshift(N[0] * 1);
  return res.join('') * 1;
};

// 从后往前
function setNine(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 9;
  }
}

console.log(monotoneIncreasingDigits(1234));
console.log(monotoneIncreasingDigits(2221)); // 1999
console.log(monotoneIncreasingDigits(10));
console.log(monotoneIncreasingDigits(332));