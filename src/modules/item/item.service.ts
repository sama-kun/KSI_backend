import { Injectable } from '@nestjs/common';
import { Item, Prisma } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { BaseService } from '@/common/base/BaseService';
import { GetResult } from '@prisma/client/runtime/library';

@Injectable()
export class ItemService extends BaseService<
  Item,
  Prisma.ItemCreateInput,
  Partial<Prisma.ItemCreateInput>
> {
  protected readonly model = Prisma.ModelName.Item;
  constructor(prisma: PrismaService) {
    super();
    this.prisma = prisma;
  }
  // test(){
  //   return super().
  // }
}
