import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { BaseService } from '@/common/base/BaseService';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectLiteral } from 'typeorm';

import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { ItemGroupService } from '../item-group/item-group.service';
import { UserEntity } from '@/database/entities/user.entity';
import { CartItemStatusEnum, ItemStatusEnum } from '@/interfaces/enums';
import { ItemService } from '../item/item.service';

@Injectable()
export class CartItemService extends BaseService<
  CartItemEntity,
  CreateCartItemDto,
  UpdateCartItemDto
> {
  constructor(
    @InjectRepository(CartItemEntity)
    protected repo: Repository<CartItemEntity>,
    private readonly itemGroupService: ItemGroupService,
    private readonly itemService: ItemService,
  ) {
    super();
  }

  async createMany(data: CreateCartItemDto, user: UserEntity): Promise<any> {
    // const id = data.item;
    // const item = this.itemService.findById(id, []);

    const cartItemSave = await this.create(data, user);
    const cartItem = await this.findById(cartItemSave.id, ['itemGroup']);
    await this.itemGroupService.transaction(
      cartItem.itemGroup.id,
      cartItem,
      data.quantity,
      '+',
    );
    return await this.findById(cartItem.id, ['itemGroup', 'items']);
  }

  async plus(id: number): Promise<CartItemEntity> {
    const candidate = await this.findById(id, ['itemGroup']);
    await this.itemGroupService.transaction(
      candidate.itemGroup.id,
      candidate,
      1,
      '+',
    );

    candidate.quantity += 1;
    await this.repo.save(candidate);

    return await this.findById(id, ['items', 'createdBy', 'itemGroup']);
  }

  async minus(id: number): Promise<CartItemEntity> {
    const candidate = await this.findById(id, ['items', 'itemGroup']);
    console.log(candidate.items);
    await this.itemGroupService.transaction(
      candidate.itemGroup.id,
      candidate,
      1,
      '-',
    );
    candidate.quantity -= 1;
    const last_id = candidate.items[candidate.items.length - 1].id;
    candidate.items = [...candidate.items.filter((item) => item.id != last_id)];
    await this.itemService.update(null, last_id, { status: ItemStatusEnum.ok });
    await this.repo.save(candidate);

    return await this.findById(id, ['items', 'createdBy', 'itemGroup']);
  }

  private async check(id: number, transcript: number) {
    const cart = await this.findById(id, []);

    if (cart.quantity < transcript)
      throw new BadRequestException("Don't enough quantity of item id: " + id);
  }

  async return(id: number, initialQuantity: number) {
    const candidate = await this.findById(id, []);
    candidate.isHistory = true;
    candidate.initialQuantity = initialQuantity;
    if (candidate.quantity != initialQuantity) {
      candidate.status = CartItemStatusEnum.lackOfQuantity;
    } else {
      candidate.status = CartItemStatusEnum.finished;
    }
    return candidate;
  }

  // async send(user: UserEntity, ids: number[]) {
  //   const records = [];
  //   for (const id of ids) {
  //     const record = await this.update(user, id, {
  //       status: CartItemStatusEnum.fillWorkingHours,
  //     });
  //     records.push(record);
  //   }

  //   return records;
  // }
}
