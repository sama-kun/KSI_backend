import { BaseModel } from '@/common/base/BaseModel';
import { IMaintenance } from '@/interfaces/entities';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ItemEntity } from './item.entity';
import { MainFileEntity } from './main-file.entity';
import { UserEntity } from './user.entity';

@Entity('maintenance')
export class MaintenanceEntity extends BaseModel implements IMaintenance {
  @ManyToOne(() => ItemEntity, (item) => item.maintenances)
  item: ItemEntity;

  @OneToMany(() => MainFileEntity, (mainFile) => mainFile.maintenance)
  mainFiles: MainFileEntity[];

  @ManyToOne(() => UserEntity, (user) => user.maintenances, { nullable: true })
  checker: UserEntity;

  @Column({ type: 'date', nullable: true })
  checkDate: Date;
}
