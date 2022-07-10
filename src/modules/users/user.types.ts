export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginInput {
  password: string;
  email: string;
}

export interface RegisterInput extends LoginInput {
  firstName: string;
  lastName: string;
}

export interface ResponseUser extends RegisterInput {
  _id: string;
}

export interface ResponseLogin {
  jwt: string;
}
