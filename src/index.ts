//union
let error : string | null = null;

setTimeout(() => {
    error="This is an error"
    console.log(error);
}, 3000);

console.log(error);