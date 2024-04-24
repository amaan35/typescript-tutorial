"use strict";
const user = {
    name: "Amaan",
    age: 23,
    getMessage() {
        return "hello " + this.name;
    },
};
const user2 = {
    name: "Ali",
    getMessage() {
        return "hello " + this.name;
    },
};
console.log(user.getMessage());
