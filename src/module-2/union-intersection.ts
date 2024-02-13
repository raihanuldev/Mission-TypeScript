type noobDeveloper ={
    name:string;
}

type juniorDev ={
    expertise:string,
    experiance: number
}


// example of Noob Developer
const newbieDev:noobDeveloper ={
    name:'Mong das',
    
}

// example of Junior developer
const juniorDeveloper:juniorDev | noobDeveloper={
    name:'raihan',
    experiance:364,
    expertise:'reactjs',
}
// union Type 

const Prodeveloper:juniorDev & noobDeveloper ={
    name:'rihan',
    experiance:83,
    expertise:'react'
}

