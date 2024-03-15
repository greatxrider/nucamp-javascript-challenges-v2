function myFunction() {
    return Promise.resolve("Hello");
}

myFunction().then(
    resolve => {
        console.log(resolve);
    }
)

async function myFunction2() {
    return "Hello2345";
}

myFunction2().then (
    resolve =>{
        setTimeout(()=>console.log(resolve), 6000);
    }
)

let count = 1; // Start from 1
const interval = setInterval(() => {
  console.log(count);
  count += 1;
  if (count > 20) {
    clearInterval(interval); // Stop the interval when count exceeds 20
  }
}, 1000); // 2000 milliseconds = 2 seconds











