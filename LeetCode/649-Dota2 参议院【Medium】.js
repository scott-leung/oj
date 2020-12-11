// 题目链接：https://leetcode-cn.com/problems/dota2-senate/

/**
 * 这里要审清楚题目，只有留下全是自己人的时候，才能宣布结果
 * 所以是一轮一轮地往下投票，最优的投票策略就是把后面一名要投票的对手干掉出场
 * 所以第一遍先分开两边所有选手，然后分别出场一个，PK干死一个，赢的重新回到队列迎接下一轮PK
 */

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let dQueue = [];
  let rQueue = [];
  let n = senate.length;
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') rQueue.push(i);
    else dQueue.push(i);
  }

  while (dQueue.length && rQueue.length) {
    let d = dQueue.shift();
    let r = rQueue.shift();
    if (d < r) {
      // 保证相对位置不变
      dQueue.push(d + n);
    } else {
      rQueue.push(r + n);
    }
  }
  return dQueue.length ? 'Dire' : 'Radiant';
};

console.log(predictPartyVictory('RD'));
console.log(predictPartyVictory('RRDDD'));
console.log(predictPartyVictory('RRDDDD'));

console.log(predictPartyVictory('DDDDRRDDDRDRDRRDDRDDDRDRRRRDRRRRRDRDDRDDRRDDRRRDDRRRDDDDRRRRRRRDDRRRDDRDDDRRRDRDDRDDDRRDRRDRRRDRDRDR'));

// RRRRRR
// DDDD DDD D D DD DDD D D R R D DD DD R D RR DD RRRRR RRR R RRR R R RR RR RRRDRDRDR
