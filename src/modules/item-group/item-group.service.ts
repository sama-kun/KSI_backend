import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemGroupDto } from './dto/create-item-group.dto';
import { UpdateItemGroupDto } from './dto/update-item.dto';
import { ItemService } from '../item/item.service';
import { ItemStatusEnum } from '@/interfaces/enums';
import { CartItemEntity } from '@/database/entities/cart-item.entity';

@Injectable()
export class ItemGroupService extends BaseService<
  ItemGroupEntity,
  CreateItemGroupDto,
  UpdateItemGroupDto
> {
  constructor(
    @InjectRepository(ItemGroupEntity)
    protected repo: Repository<ItemGroupEntity>,
    protected repoItem: ItemService,
  ) {
    super();
  }

  async transaction(
    id: number,
    cart: CartItemEntity,
    quantity: number,
    operation: string,
  ): Promise<ItemGroupEntity> {
    const candidate = await this.findById(id, ['items']);

    if (operation === '+') {
      await this.check(id, quantity);
      candidate.quantity -= quantity;
      candidate.projectQuantity += quantity;
      console.log(operation);
      await this.addRandomItemToCatItem(id, cart.id);
    } else {
      if (candidate.projectQuantity === 0)
        throw new BadRequestException(
          "Don't enough quantity of itemGroup id: " + id,
        );
      candidate.quantity += quantity;
      candidate.projectQuantity -= quantity;
      const items = cart.items;
      await this.repoItem.removeCartItem(
        items[items.length - 1].id,
        candidate.id,
      );
    }

    return await this.repo.save(candidate);
  }

  async check(id: number, transcript: number) {
    const item = await this.findById(id, []);

    if (item.quantity < transcript)
      throw new BadRequestException(
        "Don't enough quantity of itemGroup id: " + id,
      );
  }

  async addRandomItemToCatItem(id: number, cartId: number): Promise<any> {
    const candidate = await this.findById(id, ['items']);
    const items = candidate.items.filter(
      (item) => item.status === ItemStatusEnum.ok,
    );
    if (items.length === 0)
      throw new BadRequestException('All items are booking');
    const itemId = this.randomGenerater(items.map((item) => item.id));
    return this.repoItem.addCartItem(itemId, cartId);
  }

  private randomGenerater(ids: number[]): number {
    return ids[Math.floor(Math.random() * ids.length)];
  }

  // test(){
  //   return super().
  // }
}
