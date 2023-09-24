import { Entity, Column, OneToMany } from 'typeorm';
import { ItemGroupEntity } from './item-group.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { ICategory } from '@/interfaces/entities';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Entity('category')
export class CategoryEntity extends BaseModel implements ICategory {
  @Column({ unique: true, nullable: true })
  @ApiPropertyOptional()
  name?: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  description?: string;

  @OneToMany(() => ItemGroupEntity, (itemGroup) => itemGroup.category)
  @ApiPropertyOptional({ type: () => ItemGroupEntity, isArray: true })
  itemGroups: ItemGroupEntity[];
}
