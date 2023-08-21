import { ItemEntity } from './item.entity';
import { BaseModel } from '@/common/base/BaseModel';
import { IFile } from '@/interfaces/entities';
import { FileTypes } from '@/interfaces/enums';
export declare class FileEntity extends BaseModel implements IFile {
    original: string;
    item: ItemEntity;
    type: FileTypes;
}
