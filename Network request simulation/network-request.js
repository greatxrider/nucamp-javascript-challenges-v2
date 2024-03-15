const fetchData = new Promise((resolve, reject) => {
    // First, we'll use setTimeout to simulate a delay of 2000 milliseconds:
    document.getElementById('result').textContent = "Fetching Message....";
    setTimeout(() => {
        // Then we'll add a condition to test:
        let condition = true;
        let message;
        // TODO: Write an if statement to resolve or reject the Promise based on the condition
        if (condition) {
            // TODO: If the condition is true, resolve the Promise with the message "Data retrieved successfully!"
            message = "Data retrieved successfully!"
            resolve(message);
        } else {
            // TODO: If the condition is false, reject the Promise with the message "Data retrieval failed!"
            message = "Data retrieval failed!"
            reject(message);
        }
    }, 5000);
});

// The code below will test your Promise. Do not modify this code.
fetchData.then((message) => {
    document.getElementById('result').textContent = message;
}).catch((error) => {
    document.getElementById('result').textContent = error;
});
