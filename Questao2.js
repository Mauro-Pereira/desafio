function isFibonacci(num) {
    if (num < 0) return false;
    if (num === 0 || num === 1) return true;

    let a = 0, b = 1, c = a + b;
    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

const numeroParaChecar = 21;

if (isFibonacci(numeroParaChecar)) {
    console.log(`${numeroParaChecar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroParaChecar} não pertence à sequência de Fibonacci.`);
}