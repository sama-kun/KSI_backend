import { CategoryEntity } from '@/database/entities/category.entity';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto extends PartialType(CategoryEntity) {}
