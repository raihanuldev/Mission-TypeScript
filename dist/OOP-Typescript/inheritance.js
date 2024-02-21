"use strict";
// Common property will Be extend each Class
class Parent {
    constructor(name, age, adress) {
        this.name = name;
        this.age = age;
        this.adress = adress;
    }
    // common Method For Each Person
    makeSleep(hours) {
        return `this ${this.name} Person will take ${hours} for sleep`;
    }
}
// Student Class
class Student extends Parent {
    // Constructor
    constructor(name, age, adress) {
        super(name, age, adress);
    }
}
// Teacher Class
class Teacher extends Parent {
    // Constructor
    constructor(name, age, adress, destination) {
        super(name, age, adress);
        this.destination = destination;
    }
    // Method: 
    numberOfClass(NOC) {
        return `this ${name} Person will take ${NOC} classes`;
    }
}
const student1234 = new Student("abol", 213, "kalaPara");
const hamidsir = new Teacher("Hamid", 8, "Dhaka", "Programmmer");
