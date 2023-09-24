import { ProjectStatusEnum } from '@/interfaces/enums';
import { ProjectEntity } from '../entities/project.entity';

export const items: any = [
  {
    itemGroup: 1,
    items: ['testItem1', 'testItem2', 'testItem3', 'testItem4', 'testItem5'],
  },
  {
    itemGroup: 2,
    items: ['testItem1', 'testItem2', 'testItem3', 'testItem4', 'testItem5'],
  },
];
export const projects: Partial<ProjectEntity>[] = [
  {
    name: 'Kashagan',
    description: 'This is test project in seeds',
    status: ProjectStatusEnum.detailing,
  },
  {
    name: 'Zhanaozen',
    description: 'This is test project in seeds',
    status: ProjectStatusEnum.detailing,
  },
];
