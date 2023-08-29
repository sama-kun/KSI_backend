import { RoleEnum } from '@/interfaces/enums';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';
export declare class UserEntity extends BaseModel implements IUser {
    email: string;
    password: string;
    role: RoleEnum;
    carts: CartEntity[];
}
