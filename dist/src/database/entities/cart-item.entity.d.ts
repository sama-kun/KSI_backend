import { ItemEntity } from './item.entity';
import { ProjectEntity } from './project.entity';
import { CartStatusEnum } from '@/interfaces/enums';
import { BaseModel } from '@/common/base/BaseModel';
import { ICartItem } from '@/interfaces/entities';
export declare class CartItemEntity extends BaseModel implements ICartItem {
    quantity?: number;
    initialQuantity?: number;
    item: ItemEntity;
    project?: ProjectEntity;
    isHistory: boolean;
    returnTime?: Date;
    workedHours?: number;
    status: CartStatusEnum;
}
