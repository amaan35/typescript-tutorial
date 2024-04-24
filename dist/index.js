"use strict";
//union
let error = null;
setTimeout(() => {
    error = "This is an error";
    console.log(error);
}, 3000);
console.log(error);
