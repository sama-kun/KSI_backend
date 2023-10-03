 import {
  FileTypesEnum,
  ItemStatusEnum,
  MainFileTypesEnum,
  MainTypeEnum,
  ProjectStatusEnum,
  RoleEnum,
} from './enums';

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
  role: RoleEnum;
  carts: ICart[];
  maintenances: IMaintenance[];
}

export interface ICategory extends IBaseModel {
  name?: string;
  description?: string;
  itemGroups: IItemGroup[];
}

export interface IFile extends IBaseModel {
  url: string;
  secure_url: string;
  asset_id: string;
  public_id: string;
  itemGroup?: IItemGroup;
  type: FileTypesEnum;
  folder?: string;
}

export interface IProject extends IBaseModel {
  name: string;
  description?: string;
  cart: ICart;
  status: ProjectStatusEnum;
}

export interface ICart extends IBaseModel {
  cartItems: ICartItem[];
  project: IProject;
  returnTime?: Date;
  returnBy?: IUser;
}

export interface ICartItem extends IBaseModel {
  quantity?: number;
  initialQuantity?: number;
  itemGroup: IItemGroup;
  items: IItem[];
  cart?: ICart;
  isHistory: boolean;
  comment?: string;
}

export interface IMainFile {
  id: number;
  maintenance?: IMaintenance;
  file: IFile;
  type: MainFileTypesEnum;
}

export interface IMaintenance extends IBaseModel {
  item: IItem;
  checker?: IUser;
  reports: IMainFile[];
  checkDate?: Date;
  type: MainTypeEnum;
}

export interface IItem extends IBaseModel {
  uuid: string;
  status: ItemStatusEnum;
  itemGroup: IItemGroup;
  maintenances: IMaintenance[];
  workingHours?: number;
  workedHours?: number;
  cartItems: ICartItem[];
}

export interface IItemGroup extends IBaseModel {
  name: string;
  description?: string;
  category?: ICategory;
  tag?: string;
  quantity?: number;
  images: IFile[];
  projectQuantity?: number;
  totalQuantity?: number;
  items: IItem[];
}

// date            DateTime?
//   authorId        Int
//   createdBy       User       @relation("created",fields: [authorId], references: [id])
//   userId          Int?
//   checker         User?      @relation("checker",fields: [userId], references: [id])
//   file1Id         Int?
//   file1           File?      @relation("Main",fields: [file1Id], references: [id])
//   file2Id         Int?
//   file2           File?      @relation("Main",fields: [file2Id], references: [id])
//   file3Id         Int?
//   file3           File?      @relation("Main",fields: [file3Id], references: [id])
//   file4Id         Int?
//   file4           File?      @relation("Main",fields: [file4Id], references: [id])
