const myNumbers = [1, 5, -5, -7, 34, 4, 5, 2];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

function removeNeg(numbers, callbackFunc) {
    const myArr = [];
    for(const x of numbers) {
        if(callbackFunc(x)) {
            myArr.push(x);
        }
    }
    return myArr;
}

function myFunction() {
    console.log("I Love You !!");
}

function logposNumbers () {
    console.log(posNumbers);
}

setTimeout(logposNumbers, 3000);
