interface IUser {
  name: string; //mandatory field
  age?: number; //optional field
  getMessage():string;
}
const user: IUser = {
  name: "Amaan",
  age: 23,
  getMessage() {
      return "hello "+this.name
  },
};
const user2: IUser = {
  name: "Ali",
  getMessage() {
      return "hello "+this.name
  },
};

console.log(user.getMessage());