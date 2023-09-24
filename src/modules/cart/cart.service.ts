import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemGroupService } from '../item-group/item-group.service';
import { UserEntity } from '@/database/entities/user.entity';
import { ProjectEntity } from '@/database/entities/project.entity';

@Injectable()
export class CartService extends BaseService<
  CartItemEntity,
  CreateCartDto,
  UpdateCartDto
> {
  constructor(
    @InjectRepository(CartItemEntity)
    protected repo: Repository<CartItemEntity>,
  ) {
    super();
  }

  // async createMany(data: CreateCartDto, user: UserEntity): Promise<any> {
  //   // const id = data.item;
  //   // const item = this.itemService.findById(id, []);

  //   const cartSave = await this.create(data, user);
  //   const cart = await this.findById(cartSave.id, ['item']);
  //   console.log(cart);
  //   await this.itemService.transaction(cart.item.id, data.quantity, '+');
  //   return cartSave;
  // }

  // async plus(id: number): Promise<CartItemEntity> {
  //   const candidate = await super.findById(id, ['item', 'project']);
  //   await this.itemService.transaction(candidate.item.id, 1, '+');

  //   (candidate.quantity += 1), await this.repo.save(candidate);

  //   return await super.findById(id, ['item', 'project', 'createdBy']);
  // }

  // async minus(id: number): Promise<CartItemEntity> {
  //   const candidate = await super.findById(id, ['item']);
  //   await this.check(id, 1);
  //   await this.itemService.transaction(candidate.item.id, 1, '-');
  //   candidate.quantity -= 1;

  //   await this.repo.save(candidate);

  //   return await super.findById(id, ['item', 'project', 'createdBy']);
  // }

  // private async check(id: number, transcript: number) {
  //   const cart = await this.findById(id, []);

  //   if (cart.quantity < transcript)
  //     throw new BadRequestException("Don't enough quantity of item id: " + id);
  // }

  // async return(id: number, initialQuantity: number) {
  //   const candidate = await this.findById(id, []);
  //   candidate.isHistory = true;
  //   candidate.initialQuantity = initialQuantity;
  //   if (candidate.quantity != initialQuantity) {
  //     candidate.status = CartStatusEnum.FillLackReason;
  //   } else {
  //     candidate.status = CartStatusEnum.Finished;
  //   }
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
