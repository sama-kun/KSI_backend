import { BadRequestException, Injectable } from '@nestjs/common';
import { Cart, Item, Prisma, User } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { BaseService } from '@/common/base/BaseService';

@Injectable()
export class ItemService extends BaseService<
  Item,
  Partial<Prisma.ItemUncheckedCreateInput>,
  Prisma.ItemCreateInput
> {
  protected readonly model = Prisma.ModelName.Item;
  constructor(prisma: PrismaService) {
    super();
    this.prisma = prisma;
  }

  async transaction(
    id: number,
    quantity: number,
    operation: string,
  ): Promise<Prisma.ItemUncheckedCreateInput> {
    const candidate = await this.findById(id);

    let data = null;
    if (operation === '+') {
      await this.check(id, quantity);
      data = {
        quantity: candidate.quantity - quantity,
      };
    } else {
      data = {
        quantity: candidate.quantity + quantity,
      };
    }
    const item = await super.update(id, data);

    return item;
  }

  private async check(id: number, transcript: number) {
    const item = await this.findById(id);

    if (item.quantity < transcript)
      throw new BadRequestException("Don't enough quantity of item id: " + id);
  }
}
