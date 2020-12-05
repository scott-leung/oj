/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isPrime = new Array(n).fill(1);
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) primes.push(i);
        
        for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
            isPrime[i * primes[j]] = 0;
            // console.log(`i[${i}], j[${j}]\n${JSON.stringify(isPrime)}`);
            // 整除代表已经做过
            if (i % primes[j] === 0) break;
        }
    }
    return primes.length;
};

console.log(countPrimes(2000));