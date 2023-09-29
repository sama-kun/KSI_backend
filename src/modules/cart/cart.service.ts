import { Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from '@/database/entities/cart.entity';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { UserEntity } from '@/database/entities/user.entity';
import { ItemService } from '../item/item.service';
import { CartItemService } from '../cart-item/cart-item.service';

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
    const cartItems = [];
    for (const id of data.cartItems) {
      cartItems.push({ id: id as CartItemEntity });
      await this.cartItemService.send(Number(id));
    }
    cart.cartItems = cartItems;
    return await this.repo.save(cart);
  }

  // async return(id: number, initialQuantity: number) {
  //   const candidate = await this.findById(id, []);
  //   // candidate.isHistory = true;
  //   // candidate.initialQuantity = initialQuantity;
  //   // if (candidate.quantity != initialQuantity) {
  //   //   candidate.status = CartStatusEnum.FillLackReason;
  //   // } else {
  //   //   candidate.status = CartStatusEnum.Finished;
  //   // }

  //   return candidate;
  // }

  // async send(user: UserEntity, ids: number[], projectId: number) {
  //   const records = [];
  //   for (const id of ids) {
  //     const record = await this.update(user, id, {
  //       project: { id: projectId } as ProjectEntity,
  //       status: CartStatusEnum.FillWorkingHour,
  //     });
  //     records.push(record);
  //   }

  //   return records;
  // }

  // test(){
  //   return super().
  // }
}
