import { CategoryService } from './category.service';
import { BaseController } from '@/common/base/BaseController';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';
export declare class CategoryController extends BaseController<CategoryEntity, CreateCategoryDto, UpdateCategoryDto, SearchCategoryDto, CategoryService> {
    private categoryService;
    constructor(categoryService: CategoryService);
    importFromJSON(): Promise<any>;
}
