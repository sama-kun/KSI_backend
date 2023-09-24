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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Relation } from 'typeorm';

@Entity('main-file')
export class MainFileEntity implements IMainFile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: MainFileTypesEnum,
    default: MainFileTypesEnum.main,
  })
  @ApiPropertyOptional()
  @ApiProperty({
    example: 'main',
    description: 'the types of the reports',
    enum: MainFileTypesEnum, // Use the enum option to specify the enum type
  })
  type: MainFileTypesEnum;

  @ManyToOne(() => FileEntity)
  @ApiPropertyOptional()
  file: Relation<FileEntity>;

  @ManyToOne(() => MaintenanceEntity, (maintenance) => maintenance.reports, {
    nullable: true,
  })
  @ApiPropertyOptional()
  @JoinColumn()
  maintenance?: Relation<MaintenanceEntity>;
}
