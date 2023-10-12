import { BaseModel } from '@/common/base/BaseModel';
import { ICart } from '@/interfaces/entities';
import { CartStatusEnum } from '@/interfaces/enums';
import { Relation } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { CartItemEntity } from './cart-item.entity';
import { UserEntity } from './user.entity';
export declare class CartEntity extends BaseModel implements ICart {
    cartItems: CartItemEntity[];
    project: ProjectEntity;
    returnTime?: Date;
    returnBy?: Relation<UserEntity>;
    status: CartStatusEnum;
}
