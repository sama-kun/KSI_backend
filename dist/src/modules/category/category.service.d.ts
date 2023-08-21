import { BaseService } from '@/common/base/BaseService';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from '@/database/entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService extends BaseService<CategoryEntity, CreateCategoryDto, UpdateCategoryDto> {
    protected repo: Repository<CategoryEntity>;
    constructor(repo: Repository<CategoryEntity>);
    importCategories(): Promise<any>;
}
