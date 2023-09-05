import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ItemStatusEnum } from '@/interfaces/enums';

@Entity('item')
export class ItemEntity extends BaseModel implements IItem {
  @Column()
  @ApiPropertyOptional()
  name: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  description?: string;

  @ManyToOne(() => CategoryEntity, (category) => category.items)
  @ApiPropertyOptional()
  category?: CategoryEntity;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  tag?: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  quantity?: number;

  @OneToMany(() => FileEntity, (image) => image.item)
  @ApiPropertyOptional()
  images: FileEntity[];

  @OneToMany(() => CartItemEntity, (cart) => cart.item)
  @ApiPropertyOptional()
  carts: CartItemEntity[];

  @Column({ nullable: true, default: 0 })
  @ApiPropertyOptional()
  projectQuantity?: number;

  @OneToMany(() => MaintenanceEntity, (main) => main.item)
  @ApiPropertyOptional({ type: () => MaintenanceEntity, isArray: true })
  maintenances: MaintenanceEntity[];

  @Column({ nullable: true })
  @ApiPropertyOptional()
  totalQuantity?: number;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  workingHours?: number;

  @Column({ type: 'enum', enum: ItemStatusEnum, default: ItemStatusEnum.ok })
  @ApiProperty({ enum: ItemStatusEnum, example: ItemStatusEnum.warning })
  status: ItemStatusEnum;
}
