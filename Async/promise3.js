function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise (
  (myResolve, myReject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
      if (req.status === 200) {
        myResolve(req.response);
      } else {
        myReject("Error: " + req.status);
      }
    };
    req.send();
  }
)

myPromise.then(
  result => myDisplayer(result)
).catch(
  error => myDisplayer(error)
)
