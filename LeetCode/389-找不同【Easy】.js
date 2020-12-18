// 题目链接：https://leetcode-cn.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let hashS = {};
  let hashT = {};
  for (let i = 0; i < s.length; i++) {
    hashS[s[i]] = (hashS[s[i]] + 1) || 1;
  }
  for (let i = 0; i < t.length; i++) {
    hashT[t[i]] = (hashT[t[i]] + 1) || 1;
  }
  for (let key in hashT) {
    if (hashS[key] !== hashT[key]) return key;
  }
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('', 'y'));
console.log(findTheDifference('a', 'aa'));
console.log(findTheDifference('ae', 'aea'));
