const fetch = require("node-fetch");

async function fetchUserData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
}

fetchUserData().then(
    (data) => console.log(data)
);
