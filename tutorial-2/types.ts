// const person:{
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// }

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR = "AUTHOR",
}
const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  //   role: [2, "Author"],
  role: Role.ADMIN,
};

// person.role.push("Admin");
// person.role[1] = 4;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.role === Role.ADMIN && "is Auth");
