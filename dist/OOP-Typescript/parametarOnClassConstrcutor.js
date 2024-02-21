"use strict";
class UserInformation {
    constructor(name, age, adress, phone, isSingle) {
        this.name = name;
        this.age = age;
        this.adress = adress;
        this.phone = phone;
        this.isSingle = isSingle;
    }
    ;
    getinfo() {
        console.log(`The Peroson Name Is ${this.name} & Age Is : ${this.age}, adress: ${this.adress}, phone Number ${this.phone}`);
    }
}
const HamidBhai = new UserInformation("Hamidul Islam ", 11, "Shaplapur-USA", 321372, false);
HamidBhai.getinfo();
