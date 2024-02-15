"use strict";
let nothing;
// type Assertion 
nothing = 'Pro Developer';
nothing.split(" ");
// assertion
// function
function MinitToSecond(params) {
    if (typeof params === 'string') {
        const value = parseFloat(params) * 60;
        console.log(`converted value ${value}`);
        return value;
    }
    if (typeof params === 'number') {
        const value = params * 60;
        console.log(value);
        return value;
    }
}
const resultTobeNumber = MinitToSecond(60);
const resultTobeString = MinitToSecond("78");
// console.log(resultTobeNumber)
// console.log(resultTobeString)
// Different Way of Type Assertion
const resultTobeNumberAnoterWay = MinitToSecond(60);
const resultTobeStringAnoterWay = MinitToSecond("78");
