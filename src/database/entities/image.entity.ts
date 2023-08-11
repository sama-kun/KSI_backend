import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IImage } from '@/interfaces/entities';

@Entity('image')
export class ImageEntity extends BaseModel implements IImage {
  @Column()
  original: string;

  @ManyToOne(() => ItemEntity, (item) => item.images)
  item: ItemEntity;
}
