import { Relation } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItemGroup } from '@/interfaces/entities';
import { ItemEntity } from './item.entity';
export declare class ItemGroupEntity extends BaseModel implements IItemGroup {
    name: string;
    description?: string;
    category?: Relation<CategoryEntity>;
    tag?: string;
    quantity?: number;
    images: FileEntity[];
    projectQuantity?: number;
    totalQuantity?: number;
    items: ItemEntity[];
}
