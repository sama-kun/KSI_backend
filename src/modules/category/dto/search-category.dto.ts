import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CategoryEntity } from '@/database/entities/category.entity';

export class SearchCategoryDto extends PartialType(
  IntersectionType(CategoryEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: CategoryEntity })
  sort?: Partial<CategoryEntity>;

  @ApiPropertyOptional({ type: CategoryEntity })
  filter?: Partial<CategoryEntity>;

  @ApiPropertyOptional({ type: CategoryEntity })
  search?: Partial<CategoryEntity>;
}
