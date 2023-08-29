import { Entity, Column, ManyToOne } from 'typeorm';
import { ItemEntity } from './item.entity';
import { ProjectEntity } from './project.entity';
import { CartStatusEnum } from '@/interfaces/enums';
import { BaseModel } from '@/common/base/BaseModel';
import { ICart } from '@/interfaces/entities';

@Entity('cart')
export class CartEntity extends BaseModel implements ICart {
  @Column({ nullable: true })
  quantity?: number;

  @Column({ nullable: true })
  initialQuantity?: number;

  @ManyToOne(() => ItemEntity, (item) => item.carts)
  item: ItemEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.carts, {
    nullable: true,
  })
  project?: ProjectEntity;

  @Column({ default: false })
  isHistory: boolean;

  @Column({ nullable: true })
  workingHours?: number;

  @Column({ type: 'timestamptz', nullable: true })
  returnTime?: Date;

  @Column({ nullable: true })
  workedHouse?: number;

  @Column({ default: CartStatusEnum.OnProject })
  status: CartStatusEnum;
}
