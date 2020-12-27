// 题目链接：https://leetcode-cn.com/problems/isomorphic-strings/
// 类似290-单词规律


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let length = s.length;
  if (t.length !== length) return false;
  let k2v = {};
  let v2k = {};
  for (let i = 0; i < length; i++) {
    const k = s[i];
    const v = t[i];
    if (k2v[k]) {
      if (k2v[k] !== v) return false;
      continue;
    }
    if (v2k[v]) return false;
    k2v[k] = v;
    v2k[v] = k;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('egg', 'adc'));
console.log(isIsomorphic('eggc', 'adda'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
