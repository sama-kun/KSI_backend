import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    constructor(repo: Repository<CartEntity>);
}
