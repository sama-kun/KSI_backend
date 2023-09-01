import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';

@Entity('item')
export class ItemEntity extends BaseModel implements IItem {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.items)
  category?: CategoryEntity;

  @Column({ nullable: true })
  tag?: string;

  @Column({ nullable: true })
  quantity?: number;

  @OneToMany(() => FileEntity, (image) => image.item)
  images: FileEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.item)
  carts: CartEntity[];

  @Column({ nullable: true, default: 0 })
  projectQuantity?: number;

  @OneToMany(() => MaintenanceEntity, (main) => main.item)
  maintenances: MaintenanceEntity[];

  @Column({ nullable: true })
  totalQuantity?: number;
}
