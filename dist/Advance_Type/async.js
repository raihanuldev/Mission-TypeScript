"use strict";
// fetch json placeholder data
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
const PromisMake = () => {
    return new Promise((resolve, reject) => {
        const data = "succefully fetch data";
        if (data) {
            resolve(data);
        }
        else {
            reject("failed to getch data");
        }
    });
};
const getPromis = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield PromisMake();
    return data;
});
// Todo for Boolean TYpe ....
// MakePromis Objec
