import { ItemGroupService } from './item-group.service';
import { BaseController } from '@/common/base/BaseController';
import { SearchItemGroupDto } from './dto/search-item.dto';
import { CreateItemGroupDto } from './dto/create-item-group.dto';
import { UpdateItemGroupDto } from './dto/update-item.dto';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
export declare class ItemController extends BaseController<ItemGroupEntity, CreateItemGroupDto, UpdateItemGroupDto, SearchItemGroupDto, ItemGroupService> {
    private itemService;
    constructor(itemService: ItemGroupService);
}
