// 题目链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
// 相似题目： 123，714

/**
 * 思路：也是区分买和卖两个dp数组
 * 但这里需要用到二维数组来表示，第二维表示多少笔交易
 * buy[day][saleCount]：第day天交易了saleCount后手上还持有股票的最大价值
 * sale[day][saleCOunt]：第day天交易了saleCount后手上没持有股票的最大价值
 * 转移方程：
 * buy[day][saleCount] = max(buy[day - 1][saleCount], sale[day - 1][saleCount] - prices[day])
 * sale[day][saleCount] = max(sale[day - 1][saleCount], buy[day - 1][saleCount - 1] + prices[day])
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  // 边界
  if (!prices.length || !k) return 0;

  const dayCount = prices.length;
  const tradeCount = Math.min(k, ~~(dayCount / 2));
  let buy = new Array(dayCount).fill(0).map(v => new Array(tradeCount + 1).fill(0));
  let sale = new Array(dayCount).fill(0).map(v => new Array(tradeCount + 1).fill(0));
  // 初始值设置
  buy[0][0] = -prices[0];
  for (let i = 1; i <= tradeCount; i++) {
    buy[0][i] = sale[0][i] = -Number.MAX_SAFE_INTEGER;
  }

  for (let day = 1; day < dayCount; day++) {
    buy[day][0] = Math.max(buy[day - 1][0], sale[day - 1][0] - prices[day]);
    for (let saleCount = 1; saleCount <= tradeCount; saleCount++) {
      buy[day][saleCount] = Math.max(buy[day - 1][saleCount], sale[day - 1][saleCount] - prices[day]);
      sale[day][saleCount] = Math.max(sale[day - 1][saleCount], buy[day - 1][saleCount - 1] + prices[day]);
    }
  }

  return Math.max(...sale[dayCount - 1]);
};

console.log(maxProfit(2, [2, 4, 1]));
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
