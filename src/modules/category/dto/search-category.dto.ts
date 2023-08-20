import { IntersectionType, PartialType } from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CategoryEntity } from '@/database/entities/category.entity';

export class SearchCategoryDto extends PartialType(
  IntersectionType(CategoryEntity, SearchQueryDto),
) {
  sort?: Partial<CategoryEntity>;
}
