import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
export declare class ItemEntity extends BaseModel implements IItem {
    name: string;
    description?: string;
    category?: CategoryEntity;
    tag?: string;
    quantity?: number;
    images: FileEntity[];
    carts: CartEntity[];
    projectQuantity?: number;
}
