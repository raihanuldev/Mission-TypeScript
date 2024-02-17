class LaptopInfo {
    model: string;
    brand: string;
    constructor(model: string, brand: string

    ) {
        this.brand = brand;
        this.model = model
    }
    getInfo() {
        console.log(`The ${this.brand} says ${this.model}`)
    }
}

const result123 =new LaptopInfo("elitgbook","Hpo")
result123.getInfo()