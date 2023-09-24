import { BaseService } from '@/common/base/BaseService';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartService extends BaseService<CartItemEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartItemEntity>;
    constructor(repo: Repository<CartItemEntity>);
}
