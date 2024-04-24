"use strict";
//union without custom
let error = null;
//union with custom type
let user = null;
setTimeout(() => {
    error = "This is an error";
    console.log(error);
}, 3000);
console.log(error);
