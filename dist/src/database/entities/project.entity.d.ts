import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
import { ProjectStatusEnum } from '@/interfaces/enums';
export declare class ProjectEntity extends BaseModel implements IProject {
    name: string;
    description?: string;
    carts: CartItemEntity[];
    status: ProjectStatusEnum;
}
