import { Entity, Column, ManyToOne, OneToMany, Relation } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICartItem, IItemGroup } from '@/interfaces/entities';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ItemEntity } from './item.entity';
import { CartItemEntity } from './cart-item.entity';

@Entity('item-group')
export class ItemGroupEntity extends BaseModel implements IItemGroup {
  @Column()
  @ApiPropertyOptional()
  name: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.itemGroups)
  @ApiPropertyOptional()
  category?: Relation<CategoryEntity>;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  tag?: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  quantity?: number;

  @OneToMany(() => FileEntity, (image) => image.itemGroup)
  @ApiPropertyOptional()
  images: FileEntity[];

  @Column({ nullable: true, default: 0 })
  @ApiPropertyOptional()
  projectQuantity?: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  totalQuantity?: number;

  @OneToMany(() => ItemEntity, (item) => item.itemGroup)
  @ApiPropertyOptional()
  items: ItemEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.itemGroup)
  @ApiPropertyOptional()
  cartItems: CartItemEntity[];
}
