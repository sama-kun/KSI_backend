import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Cart, Prisma } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { BaseService } from '@/common/base/BaseService';
import { ItemService } from '../item/item.service';

@Injectable()
export class CartService extends BaseService<
  Cart,
  Partial<Prisma.CartCreateInput>,
  Prisma.CartUncheckedCreateInput
> {
  protected readonly model = Prisma.ModelName.BaseModel;
  constructor(prisma: PrismaService, private itemService: ItemService) {
    super();
    this.prisma = prisma;
  }
  async createMany(data: Cart[] & Cart, userId: number): Promise<any> {
    if (data[1]) {
      for (const cart of data) cart.userId = userId;

      const records = await this.prisma.cart.createMany({
        data,
      });
      return records;
    }
    data.userId = userId;
    super.create(data);
  }

  async plus(id: number): Promise<Prisma.CartCreateInput> {
    const candidate = await super.findOne(id, ['item']);
    await this.itemService.transaction(candidate.itemId, 1, '+');
    const data = {
      quantity: candidate.quantity + 1,
    };

    await super.update(id, data);

    return await super.findOne(id, ['item', 'project', 'createdBy']);
  }

  async minus(id: number): Promise<Prisma.CartCreateInput> {
    const candidate = await super.findOne(id, ['item']);
    await this.check(id, 1);
    await this.itemService.transaction(candidate.itemId, 1, '-');
    const data = {
      quantity: candidate.quantity - 1,
    };

    await super.update(id, data);

    return await super.findOne(id, ['item', 'project', 'createdBy']);
  }

  private async check(id: number, transcript: number) {
    const cart = await this.findById(id);

    if (cart.quantity < transcript)
      throw new BadRequestException("Don't enough quantity of item id: " + id);
  }

  async return(id: number, initialQuantity: number) {
    const candidate = await this.findById(id);
    let cart = null;
    if (candidate.quantity != initialQuantity) {
      cart = await super.update(id, {
        isHistory: true,
        status: 'Warning',
        initialQuantity,
      });
    } else {
      cart = await super.update(id, {
        isHistory: true,
        status: 'Complate',
        initialQuantity,
      });
    }
    return cart;
  }

  // test(){
  //   return super().
  // }
}
