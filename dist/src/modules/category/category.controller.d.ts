import { CategoryService } from './category.service';
import { BaseController } from '@/common/base/BaseController';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { SearchCategoryDto } from './dto/search-category.dto';
import { UserEntity } from '@/database/entities/user.entity';
export declare class CategoryController extends BaseController<CategoryEntity, CreateCategoryDto, UpdateCategoryDto, SearchCategoryDto, CategoryService> {
    private categoryService;
    constructor(categoryService: CategoryService);
    getOne(id: number, query: SearchCategoryDto): Promise<CategoryEntity>;
    create(data: CategoryEntity[] & CategoryEntity, user: UserEntity): Promise<CategoryEntity>;
    update(user: UserEntity, id: number, data: CategoryEntity): Promise<CategoryEntity>;
    findAll(query: SearchCategoryDto): Promise<any>;
    remove(user: UserEntity, id: number): Promise<any>;
}
