import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { ItemEntity } from '@/database/entities/item.entity';
export declare class ItemService extends BaseService<ItemEntity, CreateItemDto, UpdateItemDto> {
    protected repo: Repository<ItemEntity>;
    constructor(repo: Repository<ItemEntity>);
    updateWorkedHours(id: number, workedHour: number): Promise<ItemEntity>;
    updateWorkingHours(id: number, workingHour: number): Promise<ItemEntity>;
    addCartItem(itemId: number, cartId: number): Promise<ItemEntity>;
    removeCartItem(itemId: number, cartId: number): Promise<ItemEntity>;
}
