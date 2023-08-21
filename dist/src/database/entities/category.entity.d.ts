import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICategory } from '@/interfaces/entities';
export declare class CategoryEntity extends BaseModel implements ICategory {
    name?: string;
    description?: string;
    items: ItemEntity[];
}
