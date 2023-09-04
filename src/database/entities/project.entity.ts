import { Entity, Column, OneToMany } from 'typeorm';
import { CartEntity } from './cart.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IProject } from '@/interfaces/entities';
import { ApiPropertyOptional } from '@nestjs/swagger';

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
}
