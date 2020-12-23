// 题目链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string/

// 做法一：无优化
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var firstUniqChar = function (s) {
//   let hash = {};
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (!hash[c]) {
//       hash[c] = {
//         count: 1,
//         pos: i
//       }
//     } else {
//       hash[c].count++;
//     }
//   }
//   for (let key in hash) {
//     if (hash[key].count === 1) return hash[key].pos;
//   }
//   return -1;
// };

var firstUniqChar = function (s) {
  let hash = {};
  let inQueue = {};
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (hash[c]) {
      if (hash[c].in) {
        let index = queue.indexOf(c);
        queue.splice(index, 1);
        hash[c].in = false;
      }
    } else {
      hash[c] = {
        pos: i,
        in: true
      }
      queue.push(c);
    }
  }
  return queue[0] ? hash[queue[0]].pos : -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('dbddaadbb'));
