import { BaseModel } from '@/common/base/BaseModel';
import { IMaintenance } from '@/interfaces/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';
import { ItemEntity } from './item.entity';
import { MainFileEntity } from './main-file.entity';
import { UserEntity } from './user.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MainTypeEnum } from '@/interfaces/enums';

@Entity('maintenance')
export class MaintenanceEntity extends BaseModel implements IMaintenance {
  @ManyToOne(() => ItemEntity, (item) => item.maintenances)
  @JoinColumn()
  @ApiPropertyOptional()
  item: Relation<ItemEntity>;

  @OneToMany(() => MainFileEntity, (mainFile) => mainFile.maintenance)
  @ApiPropertyOptional({ type: () => MainFileEntity, isArray: true })
  reports: MainFileEntity[];

  @ManyToOne(() => UserEntity, (user) => user.maintenances, { nullable: true })
  @ApiPropertyOptional()
  checker: Relation<UserEntity>;

  @Column({ type: 'date', nullable: true })
  @ApiPropertyOptional()
  checkDate: Date;

  @ApiProperty({
    enum: MainTypeEnum,
    example: MainTypeEnum.corrective,
    description: 'Type of Maintenance',
  })
  @Column({
    type: 'enum',
    enum: MainTypeEnum,
    default: MainTypeEnum.corrective,
  })
  type: MainTypeEnum;
}
