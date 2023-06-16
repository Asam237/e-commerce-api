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
  cart?: any;
};

export type CreateCartInput = {
  quantity: number;
  product?: any;
  createdAt?: any;
  order?: any;
};

export type CreateOrderInput = {
  status: string;
  createdAt?: any;
  cart?: any;
  user?: any;
};
