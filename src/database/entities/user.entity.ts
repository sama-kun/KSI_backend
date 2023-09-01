import { Entity, Column, OneToMany } from 'typeorm';
import { RoleEnum } from '@/interfaces/enums';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';

@Entity('user')
export class UserEntity extends BaseModel implements IUser {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @OneToMany(() => CartEntity, (cart) => cart.createdBy)
  carts: CartEntity[];

  @OneToMany(() => MaintenanceEntity, (maintenance) => maintenance.checker)
  maintenances: MaintenanceEntity[];
}
