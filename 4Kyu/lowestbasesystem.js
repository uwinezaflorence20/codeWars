function getMinBase(n) {
    if (n === 1) return 2;
    for (let k = Math.floor(Math.log2(n)) + 1; k >= 2; k--) {
        let low = 2;
        let high = Math.floor(Math.pow(n, 1 / (k - 1))) + 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let sum = 1;
            let term = 1;
            for (let i = 1; i < k; i++) {
                term *= mid;
                sum += term;
                if (sum > n) break;
            }
            if (sum === n) return mid;
            else if (sum < n) low = mid + 1;
            else high = mid - 1;
        }
    }
    return n + 1; 
}