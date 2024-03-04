const jsonFile = '{"name":"John", "age":30, "city":"New York"}';

//JSON to JS object
const tojson = JSON.parse(jsonFile);
console.log(tojson);

//JS Object to JSON
const fromJSON = JSON.stringify(tojson);
console.log(fromJSON);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

console.log(myArr);

const toArr = JSON.stringify(myArr);
console.log(toArr);
