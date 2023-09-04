import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { FileEntity } from './file.entity';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IItem } from '@/interfaces/entities';
import { MaintenanceEntity } from './maintenance.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

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

  @OneToMany(() => CartEntity, (cart) => cart.item)
  @ApiPropertyOptional()
  carts: CartEntity[];

  @Column({ nullable: true, default: 0 })
  @ApiPropertyOptional()
  projectQuantity?: number;

  @OneToMany(() => MaintenanceEntity, (main) => main.item)
  @ApiPropertyOptional({ type: () => MaintenanceEntity, isArray: true })
  maintenances: MaintenanceEntity[];

  @Column({ nullable: true })
  @ApiPropertyOptional()
  totalQuantity?: number;
}
