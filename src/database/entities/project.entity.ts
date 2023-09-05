import { Entity, Column, OneToMany } from 'typeorm';
import { CartItemEntity } from './cart-item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProjectStatusEnum } from '@/interfaces/enums';

@Entity('project')
export class ProjectEntity extends BaseModel implements IProject {
  @Column()
  @ApiPropertyOptional()
  name: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  description?: string;

  @OneToMany(() => CartItemEntity, (cart) => cart.project)
  @ApiPropertyOptional({ type: () => CartItemEntity, isArray: true })
  carts: CartItemEntity[];

  @Column({
    type: 'enum',
    enum: ProjectStatusEnum,
    default: ProjectStatusEnum.planned,
  })
  @ApiProperty({
    example: 'active',
    description: 'Status of the Project',
    enum: ProjectStatusEnum, // Use the enum option to specify the enum type
  })
  status: ProjectStatusEnum;
}
