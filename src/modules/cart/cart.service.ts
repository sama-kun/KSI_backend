import { Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from '@/database/entities/cart.entity';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { UserEntity } from '@/database/entities/user.entity';
import { CartItemService } from '../cart-item/cart-item.service';
import { CartStatusEnum } from '@/interfaces/enums';

@Injectable()
export class CartService extends BaseService<
  CartEntity,
  CreateCartDto,
  UpdateCartDto
> {
  constructor(
    @InjectRepository(CartEntity)
    protected repo: Repository<CartEntity>,
    protected cartItemService: CartItemService,
  ) {
    super();
  }

  async myCreate(data: CreateCartDto, user: UserEntity): Promise<any> {
    const cart = await this.create(data, user);
    // const cartItems = [];
    for (const id of data.cartItems) {
      // cartItems.push({ id: id as CartItemEntity });
      await this.cartItemService.send(Number(id), Number(cart.id));
    }
    // data.cartItems = cartItems;

    return await this.repo.save(cart);
  }

  async return(user: UserEntity, id: number) {
    const candidate = await this.findById(id, []);
    candidate.status = CartStatusEnum.Finished;
    candidate.returnTime = new Date();
    candidate.returnBy = user;

    return candidate;
  }
}
