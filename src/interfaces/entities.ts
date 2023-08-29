import { CartStatusEnum, FileTypesEnum, RoleEnum } from './enums';

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
  type: FileTypesEnum;
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
  project?: IProject;
  isHistory: boolean;
  workingHours?: number;
  returnTime?: Date;
  returnBy?: IUser;
  workedHouse?: number;
  status: CartStatusEnum;
}

// export interface IMainFile {
//   maintenance: IMaintenance;
//   file: IFile;
//   type:
// }

// export interface IMaintenance extends IBaseModel {
//   item: IItem;
//   checker: IUser;

// }

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
