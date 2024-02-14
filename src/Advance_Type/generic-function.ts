
// arrow function

const createAnArray = <T>(params: T): T[] => {
    return [];
}

const result1 = createAnArray<string>("Bangladesh")
const result2 = createAnArray<number>(472384)
const result3 = createAnArray<object>({ name: "Raihan" });
const result4 = createAnArray<{name:string}>({ name: "Raihan" });
