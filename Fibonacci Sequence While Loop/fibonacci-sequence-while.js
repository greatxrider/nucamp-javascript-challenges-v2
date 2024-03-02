//The output should be: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function printFibonacci(n) {
    let a = 0;
    let b = 1;
    let count = 0;
    while (count < n) {
      console.log(a);
      let temp = a + b;
      a = b;
      b = temp;
      count++;
    }
}

printFibonacci(100);
