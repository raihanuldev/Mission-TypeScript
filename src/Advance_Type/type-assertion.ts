let nothing: any;
// type Assertion 
nothing = 'Pro Developer';
(nothing as string).split(" ");
// assertion

// function
function MinitToSecond (params:string|number): string | number |undefined{
    if(typeof params ==='string'){
        const value = parseFloat(params)*60
        console.log(`converted value ${value}`)
        return value;
    }
    if(typeof params === 'number'){
        const value = params*60;
        console.log(value)
        return value;
    }
}

const resultTobeNumber = MinitToSecond(60) as number;
const resultTobeString = MinitToSecond("78") as string;
// console.log(resultTobeNumber)
// console.log(resultTobeString)




