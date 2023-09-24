import { Entity, Column, OneToMany } from 'typeorm';
import { RoleEnum } from '@/interfaces/enums';
import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IUser } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CartEntity } from './cart.entity';

@Entity('user')
export class UserEntity extends BaseModel implements IUser {
  @Column({ unique: true })
  @ApiPropertyOptional()
  email: string;

  @Column()
  @ApiPropertyOptional()
  password: string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.USER })
  @ApiPropertyOptional()
  @ApiProperty({
    example: 'user',
    description: 'The role of the user',
    enum: RoleEnum, // Use the enum option to specify the enum type
  })
  role: RoleEnum;

  @OneToMany(() => CartEntity, (cart) => cart.createdBy)
  @ApiPropertyOptional({ type: () => CartItemEntity, isArray: true })
  carts: CartEntity[];

  @OneToMany(() => MaintenanceEntity, (maintenance) => maintenance.checker)
  @ApiPropertyOptional({ type: () => MaintenanceEntity, isArray: true })
  maintenances: MaintenanceEntity[];
}
