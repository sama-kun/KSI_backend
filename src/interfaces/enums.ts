export enum CartStatusEnum {
  Finished = 'Finished',
  OnProject = 'OnProject',
  InCart = 'InCart',
  finished = 'finished',
}

export enum RoleEnum {
  USER = 'user',
  ADMIN = 'admin',
  ROOT = 'root',
}

export enum FileTypesEnum {
  PDF = 'pdf',
  IMAGE = 'image',
}

export enum MainFileTypesEnum {
  fault = 'fault',
  testing = 'testing',
  main = 'main',
  problem = 'problem',
}

export enum ProjectStatusEnum {
  planned = 'planned',
  active = 'active',
  finished = 'finished',
  cancelled = 'cancelled',
}

export enum ItemStatusEnum {
  warning = 'warinig',
  ok = 'ok',
  fault = 'fault',
  inProject = 'inProject',
  inCart = 'inCart',
}

export enum CartItemStatusEnum {
  detailing = 'detailing',
  inProject = 'inProject',
  fillWorkingHours = 'fillWorkingHours',
  lackOfQuantity = 'lackOfQuantity',
  finished = 'finished',
}

export enum MainTypeEnum {
  corrective = 'corrective',
  preventive = 'preventive',
}
