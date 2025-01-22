const fibonacci = function (num) {

    if (num < 0) {
        return "OOPS";
    }
    const actualNum = +num;
    let fibo = new Array(actualNum);
    fibo[0] = 0;
    fibo[1] = 1;
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo[num];

};

// Do not edit below this line
module.exports = fibonacci;
