import { BaseModel } from '@/common/base/BaseModel';
import { ICart, IProject } from '@/interfaces/entities';
import { CartStatusEnum } from '@/interfaces/enums';
import { Relation } from 'typeorm';
import { CartItemEntity } from './cart-item.entity';
import { UserEntity } from './user.entity';
export declare class CartEntity extends BaseModel implements ICart {
    cartItems: CartItemEntity[];
    project: IProject;
    returnTime?: Date;
    returnBy?: Relation<UserEntity>;
    status: CartStatusEnum;
}
