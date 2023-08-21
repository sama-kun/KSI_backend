import { BaseService } from '@/common/base/BaseService';
import { ItemEntity } from '@/database/entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemService extends BaseService<ItemEntity, CreateItemDto, UpdateItemDto> {
    protected repo: Repository<ItemEntity>;
    constructor(repo: Repository<ItemEntity>);
}
