import { Injectable, Logger } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '@/database/prisma.service';
import { BaseService } from '@/common/base/BaseService';
const console = new Logger('CategoryService');

import * as data from '../../../convertor/output/output.json';
const input = { categories: data.categories };

@Injectable()
export class CategoryService extends BaseService<
  Category,
  Prisma.CategoryCreateInput,
  Partial<Prisma.CategoryCreateInput>
> {
  protected readonly model = Prisma.ModelName.Category;
  constructor(prisma: PrismaService) {
    super();
    this.prisma = prisma;
  }

  async importCategories(): Promise<any> {
    try {
      const output = input.categories.map((category) => ({ name: category }));

      // console.debug(output);
      const cates = await this.prisma.category.createMany({
        data: output,
      });
      console.debug(cates.count);
      return cates;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
