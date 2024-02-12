// IF an function never return anything then we can decelare Never type


function throwError(message:string):never{
    throw new Error(`${message}`);
}

// try to an normal function
// function hiBhaia(message:string):never{
//     console.log(message)
// }

throwError("bhai error paisi")
// hiBhaia("hello")