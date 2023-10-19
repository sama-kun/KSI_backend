import { BaseService } from '@/common/base/BaseService';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { Repository } from 'typeorm';
import { CreateItemGroupDto } from './dto/create-item-group.dto';
import { UpdateItemGroupDto } from './dto/update-item.dto';
import { ItemService } from '../item/item.service';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
export declare class ItemGroupService extends BaseService<ItemGroupEntity, CreateItemGroupDto, UpdateItemGroupDto> {
    protected repo: Repository<ItemGroupEntity>;
    protected repoItem: ItemService;
    constructor(repo: Repository<ItemGroupEntity>, repoItem: ItemService);
    transaction(id: number, cart: CartItemEntity, quantity: number, operation: string): Promise<ItemGroupEntity>;
    check(id: number, transcript: number): Promise<void>;
    z: any;
    addRandomItemToCatItem(id: number, cartId: number): Promise<any>;
    private randomGenerater;
}
