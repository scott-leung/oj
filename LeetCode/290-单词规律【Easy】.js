// 题目链接：https://leetcode-cn.com/problems/word-pattern/submissions/

/**
 * 思路：两个hash，一个key to value，一个value to key
 * key: 指pattern中的一个字母
 * value: 指s中分割后的单词
 * 如果当前key存在，那么看下对应的value是否相等，不相等则不符合
 * 如果当前key不存在，那么看下value是否之前有相应的key，有则不符合
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let k2v = {};
  let v2k = {};
  let arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    const k = pattern[i];
    const v = arr[i];
    if (k2v[k]) {
      if (v !== k2v[k]) return false;
      continue;
    }
    if (v2k[v]) return false;
    k2v[k] = v;
    v2k[v] = k;
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abbaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
