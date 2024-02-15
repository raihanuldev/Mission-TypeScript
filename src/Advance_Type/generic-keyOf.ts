type Person = {
    name: string,
    age: number
}

// Manual Bhabe
type newTypeManul = "name" | "age";
// Useing KeyOf

type newTypeUseingKeyOf = keyof Person;

const a: newTypeUseingKeyOf = "age";

const obj: Person = { name: "Raihan", age: 234 }
obj['age']

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    obj[key]
}
getProperty(obj,"age")