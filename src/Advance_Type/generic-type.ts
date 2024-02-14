const rollNumebrs: number[] = [3982910, 312];
const rollNumbers1: string[] = ["sdsdsd", "sdfsfsdfsdf"]

// simbol type
const rollNumbers12: Array<number> = [12, 32, 123, 3123];
const rollNumbers123: Array<string> = ["12", "32"];
//Generic Type
type genericTypeArrayNumber<T> = Array<T>;
type genericTypeArrayString<T> = Array<T>;

const numberArray: genericTypeArrayNumber<number> = [32, 324, 2423, 4234];
const stringArray: genericTypeArrayString<string> = ["sdfsdfsdf", "fsd"];

// Tuple Array
type meAndMyCrushGenericTypeString<T, x> =[T,x];
type meAndMySalleryGenericTypeStringAndNumber<x, y> = [x,y];

// Tuple Example
const meAndMyHuby: meAndMyCrushGenericTypeString<string, string> = ["raihan", "katrena Kafora"]

const meAndmySalary :meAndMySalleryGenericTypeStringAndNumber<string,number> =["Raihan",324];

// Tuple Array With Object

type meAndObject<T,U> =[T,U];

type user = {name:string,age:number};

const meAndObjectWithGenericTYpe:meAndObject<string,object> = ["Me",{name:'object',age:234}]


