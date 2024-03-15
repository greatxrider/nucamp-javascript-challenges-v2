let seconds = 0;
let seconds2 = 0;

function timer1() {
    seconds++;
    console.log(seconds);
}

function timer2() {
    seconds2++;
    console.log(seconds2);
}

setInterval(timer1, 500);
setInterval(timer2, 500);
