const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve('Data fetched successfully');
        } else {
            reject('Failed to fetch data');
        }
    }, 2000);
})

fetchData.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log(`Completed the fetch request.`);
})
