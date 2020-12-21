// 题目链接：https://leetcode-cn.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // 做法一：dp，转移方程 dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])
  // if (cost.length < 2) return 0;
  // let dp = [];
  // dp[0] = cost[0];
  // dp[1] = cost[1];
  // for (let i = 2; i <= cost.length; i++) {
  //   const costNow = cost[i] || 0;
  //   dp[i] = costNow + Math.min(dp[i - 1], dp[i - 2]);
  // }
  // return dp.pop();

  // 做法二：dp+状态压缩
  let prev = cost[0];
  let now = cost[1];
  for (let i = 2; i <= cost.length; i++) {
    const costNow = cost[i] || 0;
    const next = costNow + Math.min(prev, now);
    prev = now;
    now = next;
  }
  return now;
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
