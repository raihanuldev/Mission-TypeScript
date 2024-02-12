// unknown type

const getCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const converted = speed * 1000 / 3600;
        console.log(`Your Speed ${converted} Metar`)
    }
    if (typeof speed === 'string') {
        const value = speed.split(" ")
        console.log(value)
        const mainValue = parseFloat(value[0])
        if (typeof mainValue === 'number') {
            const converted = mainValue * 1000 / 3600;
            console.log(`Your Speed ${converted} Metar`)
        }
        else {
            console.log("This is Nan")
        }

    }
    else {
        console.log("Something worng")
    }
}

getCarSpeed("eyqwu");
getCarSpeed("1567 kmh^-1");
