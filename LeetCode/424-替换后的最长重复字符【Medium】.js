// 题目链接：https://leetcode-cn.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const num = new Array(26).fill(0);
  const n = s.length;
  let maxn = 0, left = 0, right = 0;

  while (right < n) {
    const ch = s[right].charCodeAt() - 'A'.charCodeAt();
    num[ch]++;
    maxn = Math.max(maxn, num[ch])
    if (right - left + 1 > k + maxn) {
      const leftCh = s[left].charCodeAt() - 'A'.charCodeAt();
      num[leftCh]--;
      left++;
    }
    right++;
  }
  return right - left;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
