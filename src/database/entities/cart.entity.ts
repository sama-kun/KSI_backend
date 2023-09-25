import { BaseModel } from '@/common/base/BaseModel';
import { ICart, IProject } from '@/interfaces/entities';
import { CartStatusEnum } from '@/interfaces/enums';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  Relation,
} from 'typeorm';
import { ProjectEntity } from './project.entity';
import { CartItemEntity } from './cart-item.entity';
import { UserEntity } from './user.entity';

@Entity('cart')
export class CartEntity extends BaseModel implements ICart {
  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  @ApiPropertyOptional()
  cartItems: CartItemEntity[];

  @OneToOne(() => ProjectEntity, (project) => project.cart)
  @ApiPropertyOptional()
  @JoinColumn()
  project: IProject;

  @Column({ type: 'timestamptz', nullable: true })
  @ApiPropertyOptional()
  returnTime?: Date;

  @ManyToOne(() => UserEntity)
  @ApiPropertyOptional()
  returnBy?: Relation<UserEntity>;

  @Column({ default: CartStatusEnum.InCart })
  @ApiPropertyOptional({
    example: 'Warning',
    description: 'The status of the cart',
    enum: CartStatusEnum,
  })
  status: CartStatusEnum;
}
