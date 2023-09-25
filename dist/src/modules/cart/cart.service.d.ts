import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from '@/database/entities/cart.entity';
import { UserEntity } from '@/database/entities/user.entity';
import { ItemService } from '../item/item.service';
import { CartItemService } from '../cart-item/cart-item.service';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    protected itemService: ItemService;
    protected cartItemService: CartItemService;
    constructor(repo: Repository<CartEntity>, itemService: ItemService, cartItemService: CartItemService);
    myCreate(data: CreateCartDto, user: UserEntity): Promise<any>;
}
