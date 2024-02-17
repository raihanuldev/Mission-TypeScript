class Praani {
    name:string;
    specifc:string;
    constructor(name:string,specific:string) {
        this.name = name;
        this.specifc = specific;
        
    }
    
}
// Cat 
class Cat extends Praani{
    constructor(name:string,specific:string){
        super(name,specific)
    }
    makeMewo(){
        return `this ${name} sound Meow meow}`
    }
}
// for dog
class Dog extends Praani {
    constructor(name:string,specific:string){
        super(name,specific);
    }
    // Method 
    catSound(){
        return `Ita Gang Gang kore`
    }
}

// use case of instanceOf
function getAnimal (animal:Praani){
    if(animal instanceof Dog){
        animal.catSound();
    }
    else if (animal instanceof Cat){
        animal.makeMewo()
    }
    else{
        return 'nothinggg broooo'
    }
}


const animal11 = new Dog("Kokour Vaia","dog");
const animal22 = new Cat("Bidal Viaa","cat")


