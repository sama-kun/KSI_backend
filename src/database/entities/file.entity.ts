import { Entity, Column, ManyToOne, Relation } from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IFile } from '@/interfaces/entities';
import { FileTypesEnum } from '@/interfaces/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('file')
export class FileEntity extends BaseModel implements IFile {
  @Column()
  @ApiPropertyOptional()
  url: string;

  @Column()
  @ApiPropertyOptional()
  secure_url: string;

  @Column()
  @ApiPropertyOptional()
  asset_id: string;

  @Column()
  @ApiPropertyOptional()
  public_id: string;

  @Column({ nullable: true })
  @ApiPropertyOptional()
  folder?: string;

  @ManyToOne(() => ItemEntity, (item) => item.images)
  @ApiPropertyOptional()
  @ApiProperty({
    example: 'pdf',
    description: 'The formats of tghe file',
    enum: FileTypesEnum, // Use the enum option to specify the enum type
  })
  item: Relation<ItemEntity>;

  @Column({ type: 'enum', enum: FileTypesEnum, default: FileTypesEnum.IMAGE })
  @ApiPropertyOptional()
  type: FileTypesEnum;
}
