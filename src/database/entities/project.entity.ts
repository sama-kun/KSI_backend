import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';

@Entity('project')
export class ProjectEntity extends BaseModel implements IProject {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => CartEntity, (cart) => cart.project)
  carts: CartEntity[];
}
