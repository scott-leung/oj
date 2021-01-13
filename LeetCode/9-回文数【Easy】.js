// 题目链接：https://leetcode-cn.com/problems/palindrome-number/

// 做法一：字符串半数判定
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//   const s = x.toString();
//   const len = s.length;
//   const halfLen = Math.floor(len / 2);
//   for (let i = 0; i < halfLen; i++) {
//     if (s[i] !== s[len - i - 1]) return false;
//   }
//   return true;
// };

// 做法二：字符串翻转判定
// var isPalindrome = function(x) {
//   if (x < 0) return false;
//   const s = x.toString();
//   return s.split('').reverse().join('') === s;
// };

// 做法三：数字判定
var isPalindrome = function(x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) return false;
  let right = 0;
  while (x > right) {
    right = right * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === right || x === Math.floor(right / 10);
};

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(101));
console.log(isPalindrome(1));
console.log(isPalindrome(0));
