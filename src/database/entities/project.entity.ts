import { Entity, Column, OneToOne, OneToMany } from 'typeorm';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProjectStatusEnum } from '@/interfaces/enums';
import { CartEntity } from './cart.entity';

@Entity('project')
export class ProjectEntity extends BaseModel implements IProject {
  @Column()
  @ApiPropertyOptional()
  name: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  description?: string;

  @OneToMany(() => CartEntity, (cart) => cart.project)
  @ApiPropertyOptional({ type: () => CartEntity, isArray: true })
  carts: CartEntity[];

  @Column({
    type: 'enum',
    enum: ProjectStatusEnum,
    default: ProjectStatusEnum.active,
  })
  @ApiProperty({
    example: 'active',
    description: 'Status of the Project',
    enum: ProjectStatusEnum,
  })
  status: ProjectStatusEnum;
}
