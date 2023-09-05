import { RoleEnum } from '@/interfaces/enums';
import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
export declare class UserEntity extends BaseModel implements IUser {
    email: string;
    password: string;
    role: RoleEnum;
    carts: CartItemEntity[];
    maintenances: MaintenanceEntity[];
}
