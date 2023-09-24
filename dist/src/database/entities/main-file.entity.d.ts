import { IMainFile } from '@/interfaces/entities';
import { MainFileTypesEnum } from '@/interfaces/enums';
import { FileEntity } from './file.entity';
import { MaintenanceEntity } from './maintenance.entity';
import { Relation } from 'typeorm';
export declare class MainFileEntity implements IMainFile {
    id: number;
    type: MainFileTypesEnum;
    file: Relation<FileEntity>;
    maintenance?: Relation<MaintenanceEntity>;
}
