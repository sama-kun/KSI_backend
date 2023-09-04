import { Relation } from 'typeorm';
import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IFile } from '@/interfaces/entities';
import { FileTypesEnum } from '@/interfaces/enums';
export declare class FileEntity extends BaseModel implements IFile {
    url: string;
    secure_url: string;
    asset_id: string;
    public_id: string;
    folder?: string;
    item: Relation<ItemEntity>;
    type: FileTypesEnum;
}
