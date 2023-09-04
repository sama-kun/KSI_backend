import { BaseModel } from '@/common/base/BaseModel';
import { IMaintenance } from '@/interfaces/entities';
import { Relation } from 'typeorm';
import { ItemEntity } from './item.entity';
import { MainFileEntity } from './main-file.entity';
import { UserEntity } from './user.entity';
export declare class MaintenanceEntity extends BaseModel implements IMaintenance {
    item: Relation<ItemEntity>;
    mainFiles: MainFileEntity[];
    checker: Relation<UserEntity>;
    checkDate: Date;
}
