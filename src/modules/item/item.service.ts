import { Injectable, Logger } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { BaseService } from '@/common/base/BaseService';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from '@/database/entities/item.entity';
import { ItemStatusEnum } from '@/interfaces/enums';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
const console = new Logger('ItemService');

@Injectable()
export class ItemService extends BaseService<
  ItemEntity,
  CreateItemDto,
  UpdateItemDto
> {
  constructor(
    @InjectRepository(ItemEntity) protected repo: Repository<ItemEntity>,
  ) {
    super();
  }

  async updateWorkedHours(id: number, workedHour: number): Promise<ItemEntity> {
    const candidate = await this.findById(id, []);
    candidate.workedHours = workedHour;
    candidate.status = ItemStatusEnum.ok;
    return this.repo.save(candidate);
  }

  async updateWorkingHours(
    id: number,
    workingHour: number,
  ): Promise<ItemEntity> {
    const candidate = await this.findById(id, []);
    candidate.workingHours = workingHour;
    candidate.status = ItemStatusEnum.inProject;
    return this.repo.save(candidate);
  }

  async addCartItem(itemId: number, cartId: number): Promise<ItemEntity> {
    const item = await this.findById(itemId, ['cartItems']);
    item.cartItems = [...item.cartItems, { id: cartId } as CartItemEntity];
    item.status = ItemStatusEnum.inCart;
    console.log(item);
    return this.repo.save(item);
  }

  async removeCartItem(itemId: number, cartId: number): Promise<ItemEntity> {
    const candidate = await this.findById(itemId, ['cartItems']);
    candidate.cartItems = [
      ...candidate.cartItems.filter((item) => item.id != cartId),
    ];
    candidate.status = ItemStatusEnum.ok;
    return await this.repo.save(candidate);
  }

  async updateStatus(ids: number[], status: ItemStatusEnum) {
    for (const id of ids) {
      const item = await this.findById(id, []);
      item.status = status;
      await this.repo.save(item);
    }
  }

  // async removeLast() {

  // }
}
