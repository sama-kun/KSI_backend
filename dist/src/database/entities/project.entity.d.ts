import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
import { ProjectStatusEnum } from '@/interfaces/enums';
import { CartEntity } from './cart.entity';
export declare class ProjectEntity extends BaseModel implements IProject {
    name: string;
    description?: string;
    cart: CartEntity;
    status: ProjectStatusEnum;
}
