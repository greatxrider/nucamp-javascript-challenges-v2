class Monster {
    roar () {
        console.log("The monster lets out a tremendous roar!");
    }
}

class Dragon extends Monster {
    fly () {
        console.log("The dragon flaps its wings and begins to fly.");
    }
}

const dragon1 = new Dragon();

dragon1.roar();
dragon1.fly();

class Monster1 {
    constructor (type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }

    roar () {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon1 extends Monster1 {
    constructor (type, color, element) {
        super(type, color);
        this.element = element;
    }
    
    fly () {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`)
    } 
}

const dragon3 = new Dragon1("dragon", "red", "fire");

dragon3.fly();
dragon3.roar()
console.log(dragon3.isScary);

class Werewolf extends Monster1 {
    constructor(type, color) {
        super(type, color);
    }

    howl () {
        console.log(`The ${this.color} ${this.type} howls loudly`);
    }
}

const werewolf1 = new Werewolf("Werewolf", "gray");
werewolf1.howl();
werewolf1.roar();
