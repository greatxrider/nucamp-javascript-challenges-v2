let myPromise = new Promise(
    (myResolve, myReject) => {
        let x = 1;
        if(x === 1) {
            setTimeout(() => {
                myResolve(
                    () => {
                        if (x===1){
                            return "I LOVE YOU";
                        }
                    }
                );
            }, 3000);
        }

        setTimeout(() => {
            myReject("I Love You 2");
        }, 3000);
    }
)

myPromise.then(
    result => {
        console.log( result() );
    }
).catch (
    error => {
        console.log(error);
    }
)
    