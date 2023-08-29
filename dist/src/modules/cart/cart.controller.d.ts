import { CartService } from './cart.service';
import { UserEntity } from '@/database/entities/user.entity';
import { CartEntity } from '@/database/entities/cart.entity';
import { SearchCartDto } from './dto/search-cart.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    createCustom(user: UserEntity, data: CartEntity[] & CartEntity): Promise<any>;
    getOne(id: number, query: SearchCartDto): Promise<CartEntity>;
    update(user: UserEntity, data: CartEntity, id: number): Promise<CartEntity>;
    plus(id: number): Promise<CartEntity>;
    minus(id: number): Promise<CartEntity>;
    return(id: number, body: {
        initialQuantity: number;
    }): Promise<CartEntity>;
    findAll(query: SearchQueryDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
}
