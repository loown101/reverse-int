module.exports = function reverse (n) {
    if (n<0) {
        n=n*(-1);
    }
    n = n + '';
    let i = 0;
    let result = '';
    while (i < n.length) {
    result = n[i] + result;
    i = i + 1;
    }
    return +result;
}
