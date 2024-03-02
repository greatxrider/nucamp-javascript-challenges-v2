// Drill #1: Change the below function declaration to an arrow function
const ftToInches = ft => ft * 12;
// Test - you do not need to change this part.
console.log(`5 feet equals: ${ftToInches(5)} inches.`);

// Drill #2: Change the below function declaration to an arrow function
const area = (width, length) => width * length;
// Test - you do not need to change this part.
console.log(`The area of a 4x5 rectangle is: ${area(4, 5)}.`);

// Drill #3: Change the below function expression to an arrow function
const daysToHours = days => days * 24;
// Test - you do not need to change this part.
console.log(`28 days is equal to ${daysToHours(28)} hours.`);

// Drill #4: Change the below function expression to an arrow function
const cardName = (value, suit) => `${value} of ${suit}`;
// Test - you do not need to change this part.
console.log(`You turn the card over to reveal a ${cardName(7, "Clubs")}!`);
