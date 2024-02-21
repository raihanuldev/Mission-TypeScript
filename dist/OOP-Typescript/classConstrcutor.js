"use strict";
class LaptopInfo {
    constructor(model, brand) {
        this.brand = brand;
        this.model = model;
    }
    getInfo() {
        console.log(`The ${this.brand} says ${this.model}`);
    }
}
const result123 = new LaptopInfo("elitgbook", "Hpo");
result123.getInfo();
