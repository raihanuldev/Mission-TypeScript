
// Common property will Be extend each Class
class Parent {
    name: string;
    age: number;
    adress: string;

    constructor(name: string, age: number, adress: string) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    // common Method For Each Person
    makeSleep(hours: number): string {
        return `this ${this.name} Person will take ${hours} for sleep`
    }
}



// Student Class
class Student extends Parent {
    // Constructor
    constructor(name: string, age: number, adress: string) {
        super(name, age, adress)
    }
}

// Teacher Class
class Teacher extends Parent {
    destination: string;
    // Constructor
    constructor(name: string, age: number, adress: string, destination: string) {
        super(name, age, adress)
        this.destination = destination;

    }
    // Method: 
    numberOfClass(NOC: number): string {
        return `this ${name} Person will take ${NOC} classes`
    
    }
}



const student1234 = new Student("abol", 213, "kalaPara")

const hamidsir = new Teacher("Hamid",8,"Dhaka","Programmmer");


