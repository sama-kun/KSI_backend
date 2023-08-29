import { BadRequestException, Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
import { CartEntity } from '@/database/entities/cart.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ItemService } from '../item/item.service';
import { CartStatusEnum } from '@/interfaces/enums';
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

  async createMany(data: CreateCartDto, user: UserEntity): Promise<any> {
    // if (data[1]) {
    //   for (const cart of data) {
    //     cart.createdBy = { id: userId } as UserEntity;
    //     await this.itemService.transaction(cart.item.id, cart.quantity, '+');
    //   }

    //   const records = await this.repo.save(data);
    //   return records;
    // }
    const cartSave = await this.create(data, user);
    const cart = await this.findById(cartSave.id, ['item']);
    console.log(cart);
    await this.itemService.transaction(cart.item.id, data.quantity, '+');
    return cartSave;
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
      candidate.status = CartStatusEnum.Warning;
    } else {
      candidate.status = CartStatusEnum.Complate;
    }
    return candidate;
  }

  // test(){
  //   return super().
  // }
}
