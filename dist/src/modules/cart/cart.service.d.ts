import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemService } from '../item/item.service';
import { UserEntity } from '@/database/entities/user.entity';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    private readonly itemService;
    constructor(repo: Repository<CartEntity>, itemService: ItemService);
    createMany(data: CreateCartDto, user: UserEntity): Promise<any>;
    plus(id: number): Promise<CartEntity>;
    minus(id: number): Promise<CartEntity>;
    private check;
    return(id: number, initialQuantity: number): Promise<CartEntity>;
    send(user: UserEntity, ids: number[], projectId: number): Promise<any[]>;
}
