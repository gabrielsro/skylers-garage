export type Car = {
  model: string;
  edition?: string;
  engine: string;
  displacement?: number;
  engineVariation?: string;
  transmission?: string;
  weigth?: number;
  topSpeed?: number;
  price: number;
  location?: string;
  seller?: string;
  mileage?: number;
  year?: number;
  color: string;
  acceleration?: number;
  torque?: number;
  horsepower?: number;
};

export type Recent = {
  name: string;
  location: string;
  src: string;
  created_at: string;
  car_count: number;
};

export type User = {
  name: string;
  location: string;
  src: string;
  id: string;
  cars?: [];
  created_at?: [];
};

export type Model = "R32" | "R33" | "R34" | undefined;

export type UsersResult = {
  id: string;
  name: string;
  src: string;
  created_at: string;
  rating: number;
  location: string;
};
