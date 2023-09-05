import { Entity, Column, ManyToOne } from 'typeorm';
import { ItemEntity } from './item.entity';
import { ProjectEntity } from './project.entity';
import { CartStatusEnum } from '@/interfaces/enums';
import { BaseModel } from '@/common/base/BaseModel';
import { ICartItem } from '@/interfaces/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('cart-item')
export class CartItemEntity extends BaseModel implements ICartItem {
  @Column({ nullable: true })
  @ApiPropertyOptional()
  quantity?: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  initialQuantity?: number;

  @ManyToOne(() => ItemEntity, (item) => item.carts)
  @ApiPropertyOptional()
  item: ItemEntity;

  @ManyToOne(() => ProjectEntity, (project) => project.carts, {
    nullable: true,
  })
  @ApiPropertyOptional()
  project?: ProjectEntity;

  @Column({ default: false })
  @ApiPropertyOptional()
  isHistory: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  @ApiPropertyOptional()
  returnTime?: Date;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  workedHours?: number;

  @Column({ default: CartStatusEnum.InCart })
  @ApiPropertyOptional()
  @ApiProperty({
    example: 'Warning',
    description: 'The status of the cart',
    enum: CartStatusEnum, // Use the enum option to specify the enum type
  })
  status: CartStatusEnum;
}
