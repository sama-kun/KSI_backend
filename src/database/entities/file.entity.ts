import { Entity, Column, ManyToOne } from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IFile } from '@/interfaces/entities';
import { FileTypesEnum } from '@/interfaces/enums';

@Entity('file')
export class FileEntity extends BaseModel implements IFile {
  @Column()
  url: string;

  @Column()
  secure_url: string;

  @Column()
  asset_id: string;

  @Column()
  public_id: string;

  @Column({ nullable: true })
  folder?: string;

  @ManyToOne(() => ItemEntity, (item) => item.images)
  item: ItemEntity;

  @Column({ type: 'enum', enum: FileTypesEnum, default: FileTypesEnum.IMAGE })
  type: FileTypesEnum;
}
