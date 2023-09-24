import { SearchQueryDto } from '@/common/base/dto/search-query.dto';

import { ItemEntity } from '@/database/entities/item.entity';
import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';

export class SearchItemDto extends PartialType(
  IntersectionType(ItemEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: ItemEntity })
  sort?: Partial<ItemEntity>;

  @ApiPropertyOptional({ type: ItemEntity })
  filter?: Partial<ItemEntity>;

  @ApiPropertyOptional({ type: ItemEntity })
  search?: Partial<ItemEntity>;
}
