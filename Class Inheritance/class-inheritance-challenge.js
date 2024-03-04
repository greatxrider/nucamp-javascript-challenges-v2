class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }

    fireBlast () {
        console.log(`The ${this.color} ${this.element} ${this.type} unleashes a blast of fire!`)
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

class Vampire extends Monster {
    constructor(type, color, element) {
        super(type, color, element);
        this.element = element;
    }

    turnIntoBat() {
        console.log(`The ${this.color} ${this.type} transforms into a bat.`);
    }

    summonBats() {
        console.log(`The ${this.type}, wielding the power of ${this.element}, summons many bats.`);
    }
}

const woodDragon = new Dragon("dragon", "brown", "wood");
const werewolf1 = new Werewolf("Werewolf", "Green");
const batVampire = new Vampire("Vampire", "Black", "bats");

woodDragon.roar();
woodDragon.fly();
woodDragon.fireBlast();
werewolf1.howl();
batVampire.turnIntoBat();
batVampire.summonBats();
