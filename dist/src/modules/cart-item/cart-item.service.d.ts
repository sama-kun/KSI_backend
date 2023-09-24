import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { ItemGroupService } from '../item-group/item-group.service';
import { UserEntity } from '@/database/entities/user.entity';
import { ItemService } from '../item/item.service';
export declare class CartItemService extends BaseService<CartItemEntity, CreateCartItemDto, UpdateCartItemDto> {
    protected repo: Repository<CartItemEntity>;
    private readonly itemGroupService;
    private readonly itemService;
    constructor(repo: Repository<CartItemEntity>, itemGroupService: ItemGroupService, itemService: ItemService);
    createMany(data: CreateCartItemDto, user: UserEntity): Promise<any>;
    plus(id: number): Promise<CartItemEntity>;
    minus(id: number): Promise<CartItemEntity>;
    private check;
    return(id: number, initialQuantity: number): Promise<CartItemEntity>;
}
