const fetch = require("node-fetch")

//using Promise / Working with Promise

fetch('https://official-joke-api.appspot.com/random_joke')
.then(response => response.json())
.then(joke => console.log(`Here's a joke: ${joke.setup}\n${joke.punchline}`))
.catch(error => console.error(`There was an error!`, error));

//using Async/await / working with Async/await

async function fetchJoke() {
    try {
        let respose = await fetch('https://official-joke-api.appspot.com/random_joke');
        let joke = await respose.json();
        console.log(`Here's a joke: ${joke.setup}\n${joke.punchline}`);
    } catch (error) {   
        console.error(`There was an error!`, error);
    }
}

fetchJoke();

//catching network level errors

fetch('https://api.example.com/data')
  .catch(error => console.log(error));
