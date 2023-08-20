import { Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService extends BaseService<
  CartEntity,
  CreateCartDto,
  UpdateCartDto
> {
  constructor(
    @InjectRepository(CartEntity) protected repo: Repository<CartEntity>,
  ) {
    super();
  }

  // async createMany(data: Cart[] & Cart, userId: number): Promise<any> {
  //   if (data[1]) {
  //     for (const cart of data) cart.userId = userId;

  //     const records = await this.prisma.cart.createMany({
  //       data,
  //     });
  //     return records;
  //   }
  //   data.userId = userId;
  //   super.create(data);
  // }

  // async plus(id: number): Promise<Prisma.CartCreateInput> {
  //   const candidate = await super.findOne(id, ['item']);
  //   await this.itemService.transaction(candidate.itemId, 1, '+');
  //   const data = {
  //     quantity: candidate.quantity + 1,
  //   };

  //   await super.update(id, data);

  //   return await super.findOne(id, ['item', 'project', 'createdBy']);
  // }

  // async minus(id: number): Promise<Prisma.CartCreateInput> {
  //   const candidate = await super.findOne(id, ['item']);
  //   await this.check(id, 1);
  //   await this.itemService.transaction(candidate.itemId, 1, '-');
  //   const data = {
  //     quantity: candidate.quantity - 1,
  //   };

  //   await super.update(id, data);

  //   return await super.findOne(id, ['item', 'project', 'createdBy']);
  // }

  // private async check(id: number, transcript: number) {
  //   const cart = await this.findById(id);

  //   if (cart.quantity < transcript)
  //     throw new BadRequestException("Don't enough quantity of item id: " + id);
  // }

  // async return(id: number, initialQuantity: number) {
  //   const candidate = await this.findById(id);
  //   let cart = null;
  //   if (candidate.quantity != initialQuantity) {
  //     cart = await super.update(id, {
  //       isHistory: true,
  //       status: 'Warning',
  //       initialQuantity,
  //     });
  //   } else {
  //     cart = await super.update(id, {
  //       isHistory: true,
  //       status: 'Complate',
  //       initialQuantity,
  //     });
  //   }
  //   return cart;
  // }

  // test(){
  //   return super().
  // }
}
