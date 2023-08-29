import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemService } from '../item/item.service';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    private readonly itemService;
    constructor(repo: Repository<CartEntity>, itemService: ItemService);
    createMany(data: CreateCartDto[] & CreateCartDto, userId: number): Promise<any>;
    plus(id: number): Promise<CartEntity>;
    minus(id: number): Promise<CartEntity>;
    private check;
    return(id: number, initialQuantity: number): Promise<CartEntity>;
}
