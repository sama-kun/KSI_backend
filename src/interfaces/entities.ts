import {
  CartStatusEnum,
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
  carts: ICartItem[];
  maintenances: IMaintenance[];
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
  carts: ICartItem[];
  projectQuantity?: number;
  maintenances: IMaintenance[];
  workingHours?: number;
  totalQuantity?: number;
  status: ItemStatusEnum;
}

export interface IFile extends IBaseModel {
  url: string;
  secure_url: string;
  asset_id: string;
  public_id: string;
  item: IItem;
  type: FileTypesEnum;
  folder?: string;
}

export interface IProject extends IBaseModel {
  name: string;
  description?: string;
  carts: ICartItem[];
  status: ProjectStatusEnum;
}

export interface ICartItem extends IBaseModel {
  quantity?: number;
  initialQuantity?: number;
  item: IItem;
  project?: IProject;
  isHistory: boolean;
  returnTime?: Date;
  returnBy?: IUser;
  workedHouse?: number;
  status: CartStatusEnum;
}

export interface IMainFile {
  maintenance?: IMaintenance;
  file: IFile;
  type: MainFileTypesEnum;
}

export interface IMaintenance extends IBaseModel {
  item: IItem;
  checker?: IUser;
  mainFiles: IMainFile[];
  checkDate?: Date;
  type: MainTypeEnum;
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
