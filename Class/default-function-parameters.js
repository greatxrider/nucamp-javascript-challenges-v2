function logSum(a, b) {
    if (a === undefined) { a = 0; };
    if (b === undefined) { b = 0; };
    console.log(a + b);
}

//set default value directly
function logSum2(a = 0,b = 0) {
    console.log(a + b);
}

logSum2();
logSum();

class Cat {
    constructor (name, color = "gray") {
        this.name = name;
        this.color = color;
    }
    meow () {
        console.log(`The ${this.color} cat named ${this.name} meows.`);
    }
}

const cat1 = new Cat("Poe2");
cat1.meow();

const cat2 = new Cat("Hero", "Golden");
cat2.meow();
