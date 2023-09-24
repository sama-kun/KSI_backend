import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
import { PartialType } from '@nestjs/swagger';

export class SearchItemGroupDto extends PartialType(SearchQueryDto) {
  sort?: Partial<ItemGroupEntity>;
}
