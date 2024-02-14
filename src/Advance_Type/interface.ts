
interface Habib {
    name: string,
    age: number
}

interface habibAndCurrentGf extends Habib {
    bedirName:string,
    bedirAge:number
}

const habibInfo :habibAndCurrentGf ={
    name:'Habib',
    age:45,
    bedirAge:80,
    bedirName:'Tasmin sultana'
}


interface userInfo {
    name:string,
    age:number
}

interface newUser extends userInfo {
    role:string
}

const RaihanInfo:newUser ={
    name:"raihan",
    age:324,
    role:'admin'
}

// union
type bedirInfo ={
    name:string
}

type newBedirInfo ={
    role:string
}

const PuspaInfo:bedirInfo & newBedirInfo ={
    name:'Puspa',
    role:'exxxxxx'
}












// interface habibFristGfInterFaceType {
//     gfFrist: string,
//     fristGfAge: number,
//     herEx: number
// }

// // cuurent gf info
// interface habibSecondGfInterfaceType {
//     gfSecound: string,
//     secoundGfAge: number,
//     herEx: number
// }

// Habib and Current gf




// const habib:habibFristGfInterFaceType = {
//     gfFrist:'Sondori',
//     fristGfAge:45,
//     herEx:12
// }

// Total Gf 

