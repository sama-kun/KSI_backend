import { Injectable, Logger } from '@nestjs/common';
import { BaseService } from '@/common/base/BaseService';
const console = new Logger('CategoryService');

import * as data from '../../../convertor/output/output.json';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from '@/database/entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const input = { categories: data.categories };

@Injectable()
export class CategoryService extends BaseService<
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(
    @InjectRepository(CategoryEntity)
    protected repo: Repository<CategoryEntity>,
  ) {
    super();
  }

  async importCategories(): Promise<any> {
    try {
      const output = input.categories.map((category) => ({ name: category }));

      const cates = this.repo.create(output);
      return this.repo.save(cates);
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
