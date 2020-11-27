// 题目链接：https://leetcode-cn.com/problems/4sum-ii/

// 思路，划N^4为N^2，两两一组，然后把结果用map存起来计算好数量
// 然后第二组统计时顺带把数量算好

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0;
    const N = A.length;
    let nums = new Map();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let sum = A[i] + B[j];
            nums.set(sum, nums.get(sum) + 1 || 1);
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            count += nums.get(-C[i]-D[j]) || 0;
        }
    }

    return count;
};