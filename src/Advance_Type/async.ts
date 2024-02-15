

// fetch json placeholder data

interface dataType {
    useId:number,
    id:number,
    title:string,
    completed:boolean
}

const getTodo = async (): Promise<dataType> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result)
}

getTodoData()



const PromisMake = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data = "succefully fetch data";
        if (data) {
            resolve(data)
        } else {
            reject("failed to getch data")
        }
    })
}

const getPromis = async (): Promise<string> => {
    const data = await PromisMake()
    return data;
}


// Todo for Boolean TYpe ....
// MakePromis Objec