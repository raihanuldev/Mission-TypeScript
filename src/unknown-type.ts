// unknown type

const getCarSpeed =(speed:unknown)=>{
    if(typeof speed==='number'){
        const converted = speed*1000/3600;
        console.log(`Your Speed ${converted} Metar`)
    }
    if(typeof speed === 'string'){
        const value = speed.split(" ")
        const mainValue =parseFloat( value[0])
        const converted = mainValue*1000/3600;
        console.log(`Your Speed ${converted} Metar`)

    }
}

getCarSpeed(154804394329042348848);
getCarSpeed("1567 kmh^-1");
