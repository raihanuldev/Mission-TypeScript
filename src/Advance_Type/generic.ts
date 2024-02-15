

const AddToId = <T extends userInfoSet>(userInfo: T) => {
    let userId = "Habibalikhan12nan3hdksaaj";
    return { ...userInfo, userId }
}

type userInfoSet ={
    name:string,
    age:number,
    role:string
}


AddToId({name:'raihan',age:347,role:"2748ifkfaddhfdskfad"})