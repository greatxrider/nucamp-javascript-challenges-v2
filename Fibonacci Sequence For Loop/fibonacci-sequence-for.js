let a = 0;
let b = 1;

function fibonacciUntilLimit(n) {
    for (i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function fibonacciEvenNumbers(n) {
    for (i = 0; i < n; i++) {
        if (a % 2 === 0) {
            console.log(a);
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function fibonacciSumUp(n) {
    let a = 0;
    let b = 1;
    let sum = 0;

    for (i = 0; i < n; i++) {
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
    }
    console.log(sum);
}

function fibonacciIsNumberPartOf(n) {
    let a = 0;
    let b = 1;
    let temp = 0;

    if (typeof (n) !== 'number') {
        console.log("Please enter a valid number");
        return;
    } else if (n < 0) {
        console.log("Please enter a positive number");
        return;
    } else if (n === 0) {
        console.log("The number is a Fibonacci number");
        return;
    } else {
        while (a <= n) {
            console.log(a);
            if (a === n) {
                console.log("The number is a Fibonacci number");
                return;
            }
            let temp = a + b;
            a = b;
            b = temp;
        }
        console.log("The number is not a Fibonacci number"); 
    }
}
