import { ItemService } from './item.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchItemDto } from './dto/search-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemEntity } from '@/database/entities/item.entity';
export declare class ItemController extends BaseController<ItemEntity, CreateItemDto, UpdateItemDto, SearchItemDto, ItemService> {
    private itemService;
    constructor(itemService: ItemService);
}
