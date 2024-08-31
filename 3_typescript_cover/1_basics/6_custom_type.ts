//custom type kullanmadan obje tipi tanımlama

let so: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 50,
};

let so10: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 50,
};

let so11: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 50,
};

let so12: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 50,
};

//custom type kullanarak

type UserType = {
  name: string;
  age: number;
};

let so13: UserType = {
  name: "ali",
  age: 50,
};

let so14: UserType = {
  name: "ali",
  age: 50,
};

let so15: UserType = {
  name: "ali",
  age: 50,
};

let so2: object = [];
let so3: object = {};
let so4: object = new Date();
