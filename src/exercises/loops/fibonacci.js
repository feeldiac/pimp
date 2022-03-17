//Fibonacci
function fibonacciSequence(n) {
    let a = 0, b = 1;
    console.log(a), console.log(b);
    for(let i = 0; i < n + 1; i++) {
        b = b + a;
        a = b - a;
        console.log(b);
    }
}

fibonacciSequence(15);