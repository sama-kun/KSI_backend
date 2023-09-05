import { CartService } from './cart.service';
import { UserEntity } from '@/database/entities/user.entity';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { SearchCartDto } from './dto/search-cart.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    createCustom(user: UserEntity, data: CartItemEntity[] & CartItemEntity): Promise<any>;
    getOne(id: number, query: SearchCartDto): Promise<CartItemEntity>;
    update(user: UserEntity, data: CartItemEntity, id: number): Promise<CartItemEntity>;
    plus(id: number): Promise<CartItemEntity>;
    minus(id: number): Promise<CartItemEntity>;
    return(id: number, body: {
        initialQuantity: number;
    }): Promise<CartItemEntity>;
    findAll(query: SearchQueryDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
    sendToProject(user: UserEntity, ids: number[], projectId: number): Promise<any[]>;
}
