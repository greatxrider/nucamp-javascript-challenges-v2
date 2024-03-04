//1. 

const rabbit = {
    color: "white", 
    checkWatch: function() {
        console.log(`A ${this.color} rabbit checks his watch and exclaims 'I'm late!'`);
    }
}

rabbit.checkWatch();

//2.

const spaceship = {
    name: "SpaceX", 
    launch() {
        console.log(`You have launched the spaceship ${this.name}.`);
    }
}

spaceship.launch();

//3.

const shoppingcart = {
    contents: ["Shoes", "Jeans"],
    addItem: function (item) {
        this.contents.push(item);
        console.log(`Successfully added ${item} to your Shopping Cart.`);
    },
    removeItem: function (item) {
        if (this.contents.includes(item)) {
            this.contents.splice(this.contents.indexOf(item), 1);
            console.log(`${item} has been successfully removed from your Shopping Cart. Here are the remaining items: ${this.contents.join(", ")}`);
        } else {
            console.log(`Failed to remove the ${item} item, it is not in the shopping cart.`)
        }
    }
}

shoppingcart.addItem("laptop");
console.log("The cart contains:", shoppingcart.contents);
shoppingcart.removeItem("Shoes");

//4.

const lever = {
    stamp: "ACME",
    pull: function () {
        console.log(`An anvil stamped ${this.stamp} drops on your head.`);
    }
}

lever.pull();

//5.

const motorcycle = {
    brand: "YAMAHA MT-09",
    gear1: "First Gear",
    honk: function () {
        return console.log(`The ${this.brand} goes Peep Peep.`);
    },
    changeGear: function (gear) {
        this.gear1 = gear;
        return console.log(`Changes gear to ${this.gear1}.`); // Corrected to use this.gear1
    }
    
};

motorcycle.honk();
motorcycle.changeGear("Second Gear");
