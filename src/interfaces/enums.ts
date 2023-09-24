export enum CartStatusEnum {
  Finished = 'Finished',
  OnProject = 'OnProject',
  InCart = 'InCart',
  LackOfQuantity = 'LackOfQuantity',
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
  detailing = 'detailing',
  planned = 'planned',
  active = 'active',
  finished = 'finished',
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
  fillWorkingHours = 'fillWorkingHours',
  fillWorkedHours = 'fillWorkedHours',
  lackOfQuantity = 'lackOfQuantity',
  finished = 'finished',
}

export enum MainTypeEnum {
  corrective = 'corrective',
  preventive = 'preventive',
}
