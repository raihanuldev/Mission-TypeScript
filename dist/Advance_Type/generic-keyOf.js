"use strict";
const a = "age";
const obj = { name: "Raihan", age: 234 };
obj['age'];
const getProperty = (obj, key) => {
    obj[key];
};
getProperty(obj, "age");
