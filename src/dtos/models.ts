export type CreateUserDto = {
  fullname: string;
  email: string;
  password: string;
  createdAt?: any;
  role: string;
};

export type LoginUserDto = {
  email: string;
  password: string;
};

export type CreateProductDto = {
  name: string;
  quantityAvailabe: number;
  costUnity: number;
  user?: any;
  cart?: any;
};

export type CreateCartDto = {
  quantity: number;
  product?: any;
  createdAt?: any;
  order?: any;
};

export type CreateOrderDto = {
  status: string;
  createdAt?: any;
  cart?: any;
  user?: any;
};
