import { ItemEntity } from './item.entity';
import { ProjectEntity } from './project.entity';
import { CartStatusEnum } from '@/interfaces/enums';
import { BaseModel } from '@/common/base/BaseModel';
import { ICart } from '@/interfaces/entities';
export declare class CartEntity extends BaseModel implements ICart {
    quantity?: number;
    initialQuantity?: number;
    item: ItemEntity;
    project?: ProjectEntity;
    isHistory: boolean;
    workingHours?: number;
    returnTime?: Date;
    workedHouse?: number;
    status: CartStatusEnum;
}
