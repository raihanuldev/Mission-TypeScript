
// Student Class
class Student {
    name: string;
    age: number;
    adress: string;

    // Constructor
    constructor(name: string, age: number, adress: string) {
        this.adress = adress;
        this.age = age;
        this.name = name;
    }
    // Method 
    makeSleep(hours: number): string {
        return `this ${this.name} Person will take ${hours} for sleep`
    }
}

// Teacher Class
class Teacher {
    name: string;
    age: number;
    adress: string;

    // Constructor
    constructor(name: string, age: number, adress: string) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    // Method: 
    makeSleep(hours: number): string {
        return `this ${this.name} Person will take ${hours} for sleep`

    }
    // Another Method for Teacher
    numberOfClass(NOC: number): string {
        return `this ${this.name} Person will take ${NOC} classes`

    }
}

const student1234 = new Student("abol",213,"kalaPara")
