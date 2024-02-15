class UserInformation {
    constructor(
        public name: string,
        public age: number,
        public adress: string,
        public phone: number,
        public isSingle: boolean) { };
    getinfo() {
        console.log(`The Peroson Name Is ${this.name} & Age Is : ${this.age}, adress: ${this.adress}, phone Number ${this.phone}`)
    }


}

const HamidBhai = new UserInformation("Hamidul Islam", 11, "Shaplapur-USA", 321372, false)
HamidBhai.getinfo()