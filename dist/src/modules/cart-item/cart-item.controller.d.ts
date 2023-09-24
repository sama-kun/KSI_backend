import { CartItemService } from './cart-item.service';
import { BaseController } from '@/common/base/BaseController';
import { UserEntity } from '@/database/entities/user.entity';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { SearchCartItemDto } from '@/modules/cart-item/dto/search-cart-item.dto';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
export declare class CartItemController extends BaseController<CartItemEntity, CreateCartItemDto, UpdateCartItemDto, SearchCartItemDto, CartItemService> {
    constructor(dataService: CartItemService);
    getOne(id: number, query: SearchCartItemDto): Promise<CartItemEntity>;
    create(data: CartItemEntity[] & CartItemEntity, user: UserEntity): Promise<any>;
    update(user: UserEntity, id: number, data: CartItemEntity): Promise<CartItemEntity>;
    findAll(query: SearchCartItemDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
    plus(id: number): Promise<CartItemEntity>;
    minus(id: number): Promise<CartItemEntity>;
}
