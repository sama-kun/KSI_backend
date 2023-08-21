import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
export declare class ProjectEntity extends BaseModel implements IProject {
    name: string;
    description?: string;
    carts: CartEntity[];
}
