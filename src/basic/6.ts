// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: {
//     city: string;
//     country: string;
//   };
// }

// const mango: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const poly: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
// };

interface AppUser {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: AppUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: AppUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
