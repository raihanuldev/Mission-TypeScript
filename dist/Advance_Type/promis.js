"use strict";
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const info = "Succesfully fetch data";
        if (info) {
            resolve(info);
        }
        else {
            reject("Failed to Fetch Data");
        }
    });
};
