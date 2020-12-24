// 题目链接：https://leetcode-cn.com/problems/candy/

// 做法一：效率极低，500ms，打败6%
/**
 * @param {number[]} ratings
 * @return {number}
 */
// var candy = function (ratings) {
//   let res = [];
//   for (let i = 0; i < ratings.length; i++) {
//     const now = ratings[i];
//     if (i > 0) {
//       const prev = ratings[i - 1];
//       if (now > prev) res[i] = res[i - 1] + 1;
//       else if (now === prev) res[i] = 1;
//       else {
//         res[i] = 1;
//         for (let j = i - 1; j >= 0; j--) {
//           if (ratings[j] > ratings[j + 1] && res[j] <= res[j + 1]) {
//             res[j]++;
//           } else break;
//         }
//       }
//     } else {
//       res[i] = 1;
//     }
//     // console.log(res);
//   }
//   return res.reduce((ret, val) => ret += val);
// };

// 做法二：左边检查一次，右边检查一次，效率远胜做法一，96ms，超过72%
// var candy = function (ratings) {
//   let res = [];
//   const length = ratings.length;
//   for (let i = 0; i < length; i++) {
//     const now = ratings[i];
//     if (i > 0) {
//       const prev = ratings[i - 1];
//       if (now > prev) res[i] = res[i - 1] + 1;
//       else res[i] = 1;
//     } else {
//       res[i] = 1;
//     }
//   }
//   console.log(res);
//   for (let i = length - 2; i >= 0; i--) {
//     const now = ratings[i];
//     const next = ratings[i + 1];
//     if (now > next && res[i] <= res[i + 1]) res[i] = res[i + 1] + 1;
//   }
//   console.log(res);
//   return res.reduce((ret, val) => ret += val);
// };

// 做法三：记录递增递减数量，直接相加，因为相邻的最多相差1
// ratings至少是1，这里不用考虑空情况
// 88ms，打败93%
var candy = function (ratings) {
  let length = ratings.length;
  let count = 1;
  let downCount = 0;
  let upCount = 1;

  for (let i = 1; i < length; i++) {
    const now = ratings[i];
    const prev = ratings[i - 1];
    // 递增
    if (now > prev) {
      if (downCount > 0) {
        upCount = 1;
        downCount = 0;
      }
      upCount++;
      count += upCount;
    }
    // 重置
    else if (now === prev) {
      upCount = 1;
      downCount = 0;
      count++;
    }
    // 递减
    else {
      downCount++;
      // 如果递减的数量大于上一次递增的数量，
      // 需要把递增结束的元素也算进递增数量中才正确
      if (downCount === upCount) {
        downCount++;
      }
      count += downCount;
    }
  }

  return count;
};

console.log(candy([1, 2, 3, 4, 5]));
console.log(candy([5, 4, 3, 2, 1]));
console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([1, 3, 4, 5, 2]));
