import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Role } from '@/interfaces/enums';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';

@Entity('user')
export class UserEntity extends BaseModel implements IUser {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: Role.USER })
  role: Role;

  @OneToMany(() => CartEntity, (cart) => cart.createdBy)
  carts: CartEntity[];
}
