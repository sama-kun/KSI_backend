import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { ImageEntity } from './image.entity';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';

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

  @OneToMany(() => ImageEntity, (image) => image.item)
  images: ImageEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.item)
  carts: CartEntity[];
}
