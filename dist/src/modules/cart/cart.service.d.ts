import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from '@/database/entities/cart.entity';
import { UserEntity } from '@/database/entities/user.entity';
export declare class CartService extends BaseService<CartEntity, CreateCartDto, UpdateCartDto> {
    protected repo: Repository<CartEntity>;
    constructor(repo: Repository<CartEntity>);
    myCreate(data: CreateCartDto, user: UserEntity): Promise<any>;
}
