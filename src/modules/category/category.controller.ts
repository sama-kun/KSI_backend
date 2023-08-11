import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { CategoryService } from './category.service';
import { Prisma, BaseModel, Category } from '@prisma/client';
import { BaseController } from '@/common/base/BaseController';
import { SearchCategoryDto } from './dto/search-category.dto';

@Controller('category')
export class CategoryController extends BaseController<
  Category,
  Prisma.CategoryCreateInput,
  Partial<Prisma.CategoryCreateInput>,
  SearchCategoryDto,
  CategoryService
> {
  constructor(private xxxService: CategoryService) {
    super();
    this.dataService = xxxService;
  }

  @Get('import')
  importFromJSON() {
    return this.dataService.importCategories();
  }
}
