
// 做法一：效率极低，500ms，打败6%
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let res = [];
  for (let i = 0; i < ratings.length; i++) {
    const now = ratings[i];
    if (i > 0) {
      const prev = ratings[i - 1];
      if (now > prev) res[i] = res[i - 1] + 1;
      else if (now === prev) res[i] = 1;
      else {
        res[i] = 1;
        for (let j = i - 1; j >= 0; j--) {
          if (ratings[j] > ratings[j + 1] && res[j] <= res[j + 1]) {
            res[j]++;
          } else break;
        }
      }
    } else {
      res[i] = 1;
    }
    // console.log(res);
  }
  return res.reduce((ret, val) => ret += val);
};

console.log(candy([1,2,3,4,5]));
console.log(candy([5,4,3,2,1]));
console.log(candy([1,0,2]));
console.log(candy([1,2,2]));

