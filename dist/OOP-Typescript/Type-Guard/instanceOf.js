"use strict";
class Praani {
    constructor(name, specific) {
        this.name = name;
        this.specifc = specific;
    }
}
// Cat 
class Cat extends Praani {
    constructor(name, specific) {
        super(name, specific);
    }
    makeMewo() {
        return `this ${name} sound Meow meow}`;
    }
}
// for dog
class Dog extends Praani {
    constructor(name, specific) {
        super(name, specific);
    }
    // Method 
    catSound() {
        return `Ita Gang Gang kore`;
    }
}
// use case of instanceOf
function getAnimal(animal) {
    if (animal instanceof Dog) {
        animal.catSound();
    }
    else if (animal instanceof Cat) {
        animal.makeMewo();
    }
    else {
        return 'nothinggg broooo';
    }
}
const animal11 = new Dog("Kokour Vaia", "dog");
const animal22 = new Cat("Bidal Viaa", "cat");
