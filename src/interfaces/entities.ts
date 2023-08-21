import { CartStatus, FileTypes, Role } from './enums';

export interface IBaseModel {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
  updatedBy?: IUser;
  createdBy?: IUser;
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
  images: IFile[];
  carts: ICart[];
  projectQuantity?: number;
}

export interface IFile extends IBaseModel {
  original: string;
  item: IItem;
  type: FileTypes;
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
  returnTime?: Date;
  returnBy?: IUser;
  workedHouse?: number;
  status: CartStatus;
}

// export interface IMaintenance extends IBaseModel {
//   item: IItem
// }
