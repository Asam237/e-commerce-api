export type CreateUserInput = {
  fullname: string;
  email: string;
  password: string;
  createdAt?: any;
  role: string;
};

export type LoginUserInput = {
  email: string;
  password: string;
};
