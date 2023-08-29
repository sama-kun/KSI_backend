import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemService } from '../item/item.service';
import { CartStatus } from '@/interfaces/enums';
import { UserEntity } from '@/database/entities/user.entity';

@Injectable()
export class CartService extends BaseService<
  CartEntity,
  CreateCartDto,
  UpdateCartDto
> {
  constructor(
    @InjectRepository(CartEntity) protected repo: Repository<CartEntity>,
    private readonly itemService: ItemService,
  ) {
    super();
  }

  async createMany(
    data: CreateCartDto[] & CreateCartDto,
    userId: number,
  ): Promise<any> {
    if (data[1]) {
      for (const cart of data) cart.createdBy = { id: userId } as UserEntity;

      const records = await this.repo.save(data);
      return records;
    }
    data.createdBy = { id: userId } as UserEntity;
    return this.repo.save(data);
  }

  async plus(id: number): Promise<CartEntity> {
    const candidate = await super.findById(id, ['item', 'project']);
    await this.itemService.transaction(candidate.item.id, 1, '+');

    (candidate.quantity += 1), await this.repo.save(candidate);

    return await super.findById(id, ['item', 'project', 'createdBy']);
  }

  async minus(id: number): Promise<CartEntity> {
    const candidate = await super.findById(id, ['item']);
    await this.check(id, 1);
    await this.itemService.transaction(candidate.item.id, 1, '-');
    candidate.quantity -= 1;

    await this.repo.save(candidate);

    return await super.findById(id, ['item', 'project', 'createdBy']);
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
      candidate.status = CartStatus.Warning;
    } else {
      candidate.status = CartStatus.Complate;
    }
    return candidate;
  }

  // test(){
  //   return super().
  // }
}
