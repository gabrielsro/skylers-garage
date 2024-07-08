export type Car = {
  id: string;
  model: string;
  edition?: string;
  engine: string;
  displacement?: number;
  engineVariation?: string;
  transmission?: string;
  weight?: number;
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
  description?: string;
  src?: string;
  topspeed?: number;
};

export type SellerMinimal = {
  name: string;
  id: string;
  src: string;
  rating: number;
};

export type CarUpload = {
  model: string;
  edition?: string;
  engine: string;
  displacement?: number;
  enginevariation?: string;
  transmission?: string;
  weigth?: number;
  topspeed?: number;
  price: number;
  location?: string;
  seller?: string;
  mileage?: number;
  year?: number;
  color: string;
  acceleration?: number;
  torque?: number;
  horsepower?: number;
  src?: string;
  description?: string;
};

export type CarUploadState = {
  message?: string | null;
  errors?: { transmission?: string[] };
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
  location?: string;
  src?: string | undefined;
  id: string;
  email?: string;
  password?: string;
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
