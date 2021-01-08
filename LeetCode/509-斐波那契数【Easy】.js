// 题目链接：https://leetcode-cn.com/problems/fibonacci-number/

// 思路：一步到位，递推，由dp+状态压缩得来

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 0) return 0;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= N; i++) {
        let now = prev + curr;
        prev = curr;
        curr = now;
    }
    return curr;
};