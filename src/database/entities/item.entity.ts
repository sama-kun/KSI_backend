import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { ItemStatusEnum } from '@/interfaces/enums';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Relation,
} from 'typeorm';
import { ItemGroupEntity } from './item-group.entity';
import { MaintenanceEntity } from './maintenance.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CartItemEntity } from './cart-item.entity';

@Entity('item')
export class ItemEntity extends BaseModel implements IItem {
  @Column()
  @ApiPropertyOptional()
  uuid: string;

  @Column({ type: 'enum', enum: ItemStatusEnum, default: ItemStatusEnum.ok })
  @ApiPropertyOptional()
  status: ItemStatusEnum;

  @ManyToOne(() => ItemGroupEntity, (itemGroup) => itemGroup.items)
  @JoinColumn()
  @ApiPropertyOptional()
  itemGroup: Relation<ItemGroupEntity>;

  @OneToMany(() => MaintenanceEntity, (main) => main.item)
  @ApiPropertyOptional()
  maintenances: MaintenanceEntity[];

  @Column({ nullable: true })
  @ApiPropertyOptional()
  workingHours?: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  workedHours?: number;

  @ManyToMany(() => CartItemEntity, (cartItem) => cartItem.items)
  @ApiPropertyOptional()
  @JoinTable()
  cartItems: CartItemEntity[];
}
