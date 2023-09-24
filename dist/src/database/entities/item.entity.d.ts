import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { ItemStatusEnum } from '@/interfaces/enums';
import { Relation } from 'typeorm';
import { ItemGroupEntity } from './item-group.entity';
import { MaintenanceEntity } from './maintenance.entity';
import { CartItemEntity } from './cart-item.entity';
export declare class ItemEntity extends BaseModel implements IItem {
    uuid: string;
    status: ItemStatusEnum;
    itemGroup: Relation<ItemGroupEntity>;
    maintenances: MaintenanceEntity[];
    workingHours?: number;
    workedHours?: number;
    cartItems: CartItemEntity[];
}
