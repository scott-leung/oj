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

// 做法二：in标识来优化
// var firstUniqChar = function (s) {
//   let hash = {};
//   let queue = [];
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i];
//     if (hash[c]) {
//       if (hash[c].in) {
//         let index = queue.indexOf(c);
//         queue.splice(index, 1);
//         hash[c].in = false;
//       }
//     } else {
//       hash[c] = {
//         pos: i,
//         in: true
//       }
//       queue.push(c);
//     }
//   }
//   return queue[0] ? hash[queue[0]].pos : -1;
// };

// 做法三：延迟删除优化
// var firstUniqChar = function (s) {
//   let hash = {};
//   let queue = [];
//   const length = s.length;
//   for (let i = 0; i < length; i++) {
//     const c = s[i];
//     // console.log(hash);
//     if (hash[c] >= -1) {
//       hash[c] = -1;
//       while (queue.length && hash[queue[0]] === -1) {
//         queue.shift();
//       }
//     } else {
//       hash[c] = i;
//       queue.push(c);
//     }
//   }
//   return queue[0] ? hash[queue[0]] : -1;
// };

// 做法四：前后索引相等
var firstUniqChar = function (s) {
  const length = s.length;
  let hash = {};
  for (let i = 0; i < length; i++) {
    const c = s[i];
    if (!hash[c]) {
      if (s.lastIndexOf(c) === s.indexOf(c)) return i;
      hash[c] = true;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('dbddaadbb'));
