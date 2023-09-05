import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
import { ItemStatusEnum } from '@/interfaces/enums';
export declare class ItemEntity extends BaseModel implements IItem {
    name: string;
    description?: string;
    category?: CategoryEntity;
    tag?: string;
    quantity?: number;
    images: FileEntity[];
    carts: CartItemEntity[];
    projectQuantity?: number;
    maintenances: MaintenanceEntity[];
    totalQuantity?: number;
    workingHours?: number;
    status: ItemStatusEnum;
}
