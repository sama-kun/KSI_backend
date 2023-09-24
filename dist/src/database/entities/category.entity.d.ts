import { ItemGroupEntity } from './item-group.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICategory } from '@/interfaces/entities';
export declare class CategoryEntity extends BaseModel implements ICategory {
    name?: string;
    description?: string;
    itemGroups: ItemGroupEntity[];
}
