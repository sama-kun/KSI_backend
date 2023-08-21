import { Entity, Column, ManyToOne } from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IFile } from '@/interfaces/entities';
import { FileTypes } from '@/interfaces/enums';

@Entity('file')
export class FileEntity extends BaseModel implements IFile {
  @Column()
  original: string;

  @ManyToOne(() => ItemEntity, (item) => item.images)
  item: ItemEntity;

  @Column({ type: 'enum', enum: FileTypes, default: FileTypes.IMAGE })
  type: FileTypes;
}
