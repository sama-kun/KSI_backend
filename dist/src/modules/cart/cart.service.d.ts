import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from '@/database/entities/cart.entity';
import { UserEntity } from '@/database/entities/user.entity';
import { CartItemService } from '../cart-item/cart-item.service';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    protected cartItemService: CartItemService;
    constructor(repo: Repository<CartEntity>, cartItemService: CartItemService);
    myCreate(data: CreateCartDto, user: UserEntity): Promise<any>;
    return(user: UserEntity, id: number): Promise<CartEntity>;
    accept(user: UserEntity, id: number): Promise<CartEntity>;
    decline(user: UserEntity, id: number): Promise<CartEntity>;
}
