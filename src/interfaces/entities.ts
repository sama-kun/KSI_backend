import { CartStatus, Role } from './enums';

export interface IBaseModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends IBaseModel {
  email: string;
  password: string;
  role: Role;
  carts: ICart[];
}

export interface ICategory extends IBaseModel {
  name?: string;
  description?: string;
  items: IItem[];
}

export interface IItem extends IBaseModel {
  name: string;
  description?: string;
  category?: ICategory;
  tag?: string;
  quantity?: number;
  images: IImage[];
  carts: ICart[];
}

export interface IImage extends IBaseModel {
  original: string;
  item: IItem;
}

export interface IProject extends IBaseModel {
  name: string;
  description?: string;
  carts: ICart[];
}

export interface ICart extends IBaseModel {
  quantity?: number;
  initialQuantity?: number;
  item: IItem;
  project: IProject;
  isHistory: boolean;
  workingHours?: number;
  createdBy: IUser;
  returnTime?: Date;
  workedHouse?: number;
  status: CartStatus;
}
