import { BaseModel } from '@/common/base/BaseModel';
import { IMaintenance } from '@/interfaces/entities';
import { ItemEntity } from './item.entity';
import { MainFileEntity } from './main-file.entity';
import { UserEntity } from './user.entity';
export declare class MaintenanceEntity extends BaseModel implements IMaintenance {
    item: ItemEntity;
    mainFiles: MainFileEntity[];
    checker: UserEntity;
    checkDate: Date;
}
