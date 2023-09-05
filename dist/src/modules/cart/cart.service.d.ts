import { BaseService } from '@/common/base/BaseService';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemService } from '../item/item.service';
import { UserEntity } from '@/database/entities/user.entity';
export declare class CartService extends BaseService<CartItemEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartItemEntity>;
    private readonly itemService;
    constructor(repo: Repository<CartItemEntity>, itemService: ItemService);
    createMany(data: CreateCartDto, user: UserEntity): Promise<any>;
    plus(id: number): Promise<CartItemEntity>;
    minus(id: number): Promise<CartItemEntity>;
    private check;
    return(id: number, initialQuantity: number): Promise<CartItemEntity>;
    send(user: UserEntity, ids: number[], projectId: number): Promise<any[]>;
}
