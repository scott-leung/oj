// 题目链接：https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/

const MAX_INT = Math.pow(2, 31) - 1;
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  let res = [];
  dfs(res, S, 0);
  return res;
};

function dfs(res, S, index) {
  if (index >= S.length && res.length >= 3) return true;
  for (let i = index; i < S.length; i++) {
    const item = S[i];
    if (S[index] === '0' && i > index) {
      break;
    }
    let num = parseInt(S.slice(index, i + 1));
    // console.log(`num[${num}], res${JSON.stringify(res)}`);
    if (num > MAX_INT) {
      // console.log(`${num} > ${MAX_INT}, return false`);
      break;
    }
    if (res.length < 2) {
      res.push(num);
      if (dfs(res, S, i + 1)) return true;
      // console.log(`len < 2, dfs index: ${i + 1}`);
      res.pop();
    } else {
      let sum = res[res.length - 1] + res[res.length - 2];
      if (num < sum ) {
        // console.log(`num[${num}] < sum[${sum}], continue`);
        continue;
      } else if (num > sum) {
        // console.log(`num[${num}] > sum[${sum}], return false`);
        break;
      } else {
        res.push(num);
        if (dfs(res, S, i + 1)) return true;
        // console.log(`num[${num}] === sum[${sum}]`);
        res.pop();
        break;
      }
    }
  }
  return false;
}

console.log(splitIntoFibonacci('011235'));
console.log(splitIntoFibonacci('123456579'));
console.log(splitIntoFibonacci('112358130'));
console.log(splitIntoFibonacci('1101111'));
console.log(splitIntoFibonacci('0123'));