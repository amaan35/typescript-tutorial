//custom type
interface IUser {
    name: string;
    age: number;
}
//union without custom
let error : string | null = null;
//union with custom type
let user : IUser | null = null;

setTimeout(() => {
    error="This is an error"
    console.log(error);
}, 3000);

console.log(error);