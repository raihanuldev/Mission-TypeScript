type normalUser = {
    name: string;
}
type adminUser = {
    name: string;
    role: string;
}

const normalUser1: normalUser = { name: 'abul kader' }
const adminUser1: adminUser = { name: "Haliua", role: "admin" }

// in Guard

function userCheck(user: normalUser | adminUser) {
    if('role'in user){
        return `Hey this is ${user.name} & Iam Admin In This function`
    }
    else{
        return `Hey Iam ${user.name} & Iam ONly User Broo`
    }
}

userCheck(normalUser1);
userCheck(adminUser1);