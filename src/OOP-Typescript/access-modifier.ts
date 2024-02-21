class BankAccount {
    name:string;
   protected id:number;
    private balance:number;

    constructor(name:string,id:number,balance:number){
        this.balance = balance;
        this.id = id;
        this.name = name;
    }
    getBalance(){
        console.log(`Your total balance ${this.balance}`)
    }
}

// class STudentAccount extends BankAccount {
//     constructor(id:number){
//         this.id = id;
//     }
// }


const myAccount = new BankAccount("Raihan",23,3433)



// now i can access all property . but if i add private then wit not accesable
// myAccount.balance