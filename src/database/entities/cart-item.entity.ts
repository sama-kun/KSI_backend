import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICartItem } from '@/interfaces/entities';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ItemGroupEntity } from './item-group.entity';
import { CartEntity } from './cart.entity';
import { CartItemStatusEnum } from '@/interfaces/enums';

@Entity('cart-item')
export class CartItemEntity extends BaseModel implements ICartItem {
  @Column({ nullable: true })
  @ApiPropertyOptional()
  quantity?: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  initialQuantity?: number;

  @ManyToMany(() => ItemEntity, (item) => item.cartItems)
  @ApiPropertyOptional()
  @JoinTable()
  items: ItemEntity[];

  @ManyToOne(() => ItemGroupEntity)
  @ApiPropertyOptional()
  itemGroup: ItemGroupEntity;

  @ManyToOne(() => CartEntity, (cart) => cart.cartItems, { nullable: true })
  @ApiPropertyOptional()
  @JoinColumn()
  cart?: CartEntity;

  @Column({ default: false })
  @ApiPropertyOptional()
  isHistory: boolean;

  @Column({ default: CartItemStatusEnum.detailing })
  @ApiPropertyOptional({
    example: 'detailing',
    description: 'The status of the cart',
    enum: CartItemStatusEnum,
  })
  status: CartItemStatusEnum;

  @Column({ type: 'text', nullable: true })
  @ApiPropertyOptional()
  comment?: string;
}
