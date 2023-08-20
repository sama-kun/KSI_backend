import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Roles } from '@/common/decorators/roles-auth.decorator';
import { RolesQuard } from '@/common/guards/roles.quard';
import { CategoryService } from './category.service';
import { BaseController } from '@/common/base/BaseController';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';

@Controller('category')
export class CategoryController extends BaseController<
  CategoryEntity,
  CreateCategoryDto,
  UpdateCategoryDto,
  SearchCategoryDto,
  CategoryService
> {
  constructor(private categoryService: CategoryService) {
    super();
    this.dataService = categoryService;
  }

  @Get('import')
  importFromJSON() {
    return this.dataService.importCategories();
  }
}
