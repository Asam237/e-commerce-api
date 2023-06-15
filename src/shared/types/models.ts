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

export type CreateProductInput = {
  name: string;
  quantityAvailabe: number;
  costUnity: number;
  user?: any;
};
