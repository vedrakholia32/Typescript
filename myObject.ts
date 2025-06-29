const User = {
  name: "ved",
  email: "demo@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}
// createUser({ name: "ved", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetail?: number; //Optional
};

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "gesfsd",
  isActive: false,
};

myUser.email = "vs djk";
// myUser._id = "asec";

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
