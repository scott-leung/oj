// 题目链接：https://leetcode-cn.com/problems/reorganize-string/

// 获取arr中除了code之外最大值的下标
function getMaxExclude(arr, code = 0) {
    let temp = arr[code];
    arr[code] = 0;

    let max = 0;
    let index = -1;
    // 题目要求是小写字母，就是97-122
    for (let i = 97; i < 123; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }

    arr[code] = temp;

    //console.log('index:' + index);
    return index;
}

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let arr = [];
    for (let i = 0; i < S.length; i++) {
        const code = S.charCodeAt(i);
        //console.log('S[i]:' + code);
        arr[code] = arr[code] + 1 || 1;
    }
    //console.log('arr:', arr);
    let res = '';
    let index = -1;
    let beforeCode = 0;
    // 直到没有最大值了
    while ((index = getMaxExclude(arr, beforeCode)) > 0) {
        beforeCode = index;
        res += String.fromCharCode(index);
        arr[index]--;
    }
    // 要是拼接后长度小于之前的长度，那么就是不符合
    return res.length < S.length ? '' : res;
};