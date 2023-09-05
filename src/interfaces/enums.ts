export enum CartStatusEnum {
  FillLackReason = 'FillLackReason',
  Finished = 'Finished',
  OnProject = 'OnProject',
  InCart = 'InCart',
  FillWorkingHour = 'FillWorkingHour',
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
}

export enum ItemStatusEnum {
  warning = 'warinig',
  ok = 'ok',
}

export enum MainTypeEnum {
  corrective = 'corrective',
  preventive = 'preventive',
}
