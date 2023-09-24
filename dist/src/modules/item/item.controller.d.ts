import { ItemService } from './item.service';
import { BaseController } from '@/common/base/BaseController';
import { UserEntity } from '@/database/entities/user.entity';
import { ItemEntity } from '@/database/entities/item.entity';
import { SearchItemDto } from '@/modules/item/dto/search-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController extends BaseController<ItemEntity, CreateItemDto, UpdateItemDto, SearchItemDto, ItemService> {
    constructor(dataService: ItemService);
    fillWorkedHours(id: number, body: {
        workedHours: number;
    }): Promise<ItemEntity>;
    fillWorkingHours(id: number, body: {
        workingHours: number;
    }): Promise<ItemEntity>;
    getOne(id: number, query: SearchItemDto): Promise<ItemEntity>;
    create(data: ItemEntity[] & ItemEntity, user: UserEntity): Promise<ItemEntity>;
    update(user: UserEntity, id: number, data: ItemEntity): Promise<ItemEntity>;
    findAll(query: SearchItemDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
}
