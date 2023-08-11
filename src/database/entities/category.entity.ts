import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICategory } from '@/interfaces/entities';

@Entity('category')
export class CategoryEntity extends BaseModel implements ICategory {
  @Column({ unique: true, nullable: true })
  name?: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => ItemEntity, (item) => item.category)
  items: ItemEntity[];
}
