import { CartService } from './cart.service';
import { UserEntity } from '@/database/entities/user.entity';
import { SearchCartDto } from './dto/search-cart.dto';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartEntity } from '@/database/entities/cart.entity';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    createCustom(user: UserEntity, data: CartEntity): Promise<any>;
    getOne(id: number, query: SearchCartDto): Promise<CartEntity>;
    update(user: UserEntity, data: CartEntity, id: number): Promise<CartEntity>;
    findAll(query: SearchQueryDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
    sendToProject(user: UserEntity, id: number): Promise<CartEntity>;
    accept(user: UserEntity, id: number): Promise<CartEntity>;
    decline(user: UserEntity, id: number): Promise<CartEntity>;
}
