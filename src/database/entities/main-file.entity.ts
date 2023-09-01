import { IMainFile } from '@/interfaces/entities';
import { MainFileTypesEnum } from '@/interfaces/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FileEntity } from './file.entity';
import { MaintenanceEntity } from './maintenance.entity';

@Entity('main-file')
export class MainFileEntity implements IMainFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: MainFileTypesEnum,
    default: MainFileTypesEnum.main,
  })
  type: MainFileTypesEnum;

  @ManyToOne(() => FileEntity)
  file: FileEntity;

  @ManyToOne(() => MaintenanceEntity, (maintenance) => maintenance.mainFiles)
  @JoinColumn()
  maintenance: MaintenanceEntity;
}
