import { ProjectStatusEnum } from '@/interfaces/enums';
import { ProjectEntity } from '../entities/project.entity';

export const items: any = [
  'testItem1',
  'testItem2',
  'testItem3',
  'testItem4',
  'testItem5',
  'testItem6',
  'testItem7',
  'testItem8',
  'testItem9',
  'testItem10',
];
export const projects: Partial<ProjectEntity>[] = [
  {
    name: 'Kashagan',
    description: 'This is test project in seeds',
    status: ProjectStatusEnum.active,
  },
  {
    name: 'Zhanaozen',
    description: 'This is test project in seeds',
    status: ProjectStatusEnum.active,
  },
];
