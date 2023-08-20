import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ItemEntity } from '@/database/entities/item.entity';
import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class SearchItemDto extends PartialType(SearchQueryDto) {
  sort?: Partial<ItemEntity>;
}
