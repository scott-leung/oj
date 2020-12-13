// 题目链接：https://leetcode-cn.com/problems/group-anagrams/

/**
 * 返回目标字符串排序后的字符串
 * @param {string} str 字符串
 */
function toSortStr(str) {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('');
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    const oStr = strs[i];
    const str = toSortStr(oStr);
    let list = map.get(str);
    if (!list) {
      list = [];
      map.set(str, list);
      res.push(list);
    }
    // 题目没有说到底怎么处理相同的字符串，但提交时有样例是重复的，所以这里不去重
    list.push(oStr);
  }
  return res;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['', '']));
console.log(groupAnagrams(['']));
