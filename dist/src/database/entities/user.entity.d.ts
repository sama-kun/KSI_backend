import { RoleEnum } from '@/interfaces/enums';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
import { CartEntity } from './cart.entity';
export declare class UserEntity extends BaseModel implements IUser {
    email: string;
    password: string;
    role: RoleEnum;
    carts: CartEntity[];
    maintenances: MaintenanceEntity[];
}
