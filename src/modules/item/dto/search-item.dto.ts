import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ItemEntity } from '@/database/entities/item.entity';
import { PartialType } from '@nestjs/swagger';

export class SearchItemDto extends PartialType(SearchQueryDto) {
  sort?: Partial<ItemEntity>;
}
