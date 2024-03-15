async function doubleAfter2Seconds(x) {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(x * 2);
        }, 2000));
}

async function fetchData() {
    let result = await doubleAfter2Seconds(10);
    console.log(result);
}

async function addAsync(x) {
    let a = await doubleAfter2Seconds(10);
    let b = await doubleAfter2Seconds(20);
    return x + a + b;
}

addAsync(10).then((sum) => {
    console.log(sum);
})
