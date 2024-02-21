"use strict";
const normalUser1 = { name: 'abul kader' };
const adminUser1 = { name: "Haliua", role: "admin" };
// in Guard
function userCheck(user) {
    if ('role' in user) {
        return `Hey this is ${user.name} & Iam Admin In This function`;
    }
    else {
        return `Hey Iam ${user.name} & Iam ONly User Broo`;
    }
}
userCheck(normalUser1);
userCheck(adminUser1);
