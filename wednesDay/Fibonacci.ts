function fibonacci(num: Number): number {
    if (num == 1)
        return 0;
    if (num ==2)
        return 1;
    return fibonacci(num - 2) + fibonacci(num - 1);
}

function summary(n: number): Number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += fibonacci(i)
    }
    return sum
}

console.log(fibonacci(8));
console.log(summary(8));