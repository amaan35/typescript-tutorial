interface User {
  name: string; //mandatory field
  age?: number; //optional field
}
const user: User = {
  name: "Amaan",
  age: 23,
};
const user2: User = {
  name: "Ali",
};

console.log(user2.name);