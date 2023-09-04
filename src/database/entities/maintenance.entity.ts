import { BaseModel } from '@/common/base/BaseModel';
import { IMaintenance } from '@/interfaces/entities';
import { Column, Entity, ManyToOne, OneToMany, Relation } from 'typeorm';
import { ItemEntity } from './item.entity';
import { MainFileEntity } from './main-file.entity';
import { UserEntity } from './user.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Entity('maintenance')
export class MaintenanceEntity extends BaseModel implements IMaintenance {
  @ManyToOne(() => ItemEntity, (item) => item.maintenances)
  @ApiPropertyOptional()
  item: Relation<ItemEntity>;

  @OneToMany(() => MainFileEntity, (mainFile) => mainFile.maintenance)
  @ApiPropertyOptional({ type: () => MainFileEntity, isArray: true })
  mainFiles: MainFileEntity[];

  @ManyToOne(() => UserEntity, (user) => user.maintenances, { nullable: true })
  @ApiPropertyOptional()
  checker: Relation<UserEntity>;

  @Column({ type: 'date', nullable: true })
  @ApiPropertyOptional()
  checkDate: Date;
}
