console.log("hello This is Practies Type like Practise Day")


const Person:{
    name:string,
    age:number,
    address: "cox's Bazar"
} = {
    name:'Raiohan SHarif',
    age:5243,
    address:'cox\'s Bazar'
}

type family ={
    name:string,
    son:number,
    adress:string
}

type incomeSource ={
    monthly: number
}

const familyInfo:family  ={
    name:'Raihan',
    son:45,
    adress: 'Coxs Bazar'
}
// 2 type 

const fullFamily: family & incomeSource ={
    name:'Something Wrong',
    son:34,
    adress:"haggggda",
    monthly:78400
}
