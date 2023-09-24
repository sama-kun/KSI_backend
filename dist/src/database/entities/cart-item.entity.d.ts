import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICartItem } from '@/interfaces/entities';
import { ItemGroupEntity } from './item-group.entity';
import { CartEntity } from './cart.entity';
import { CartItemStatusEnum } from '@/interfaces/enums';
export declare class CartItemEntity extends BaseModel implements ICartItem {
    quantity?: number;
    initialQuantity?: number;
    items: ItemEntity[];
    itemGroup: ItemGroupEntity;
    cart?: CartEntity;
    isHistory: boolean;
    status: CartItemStatusEnum;
    comment?: string;
}
