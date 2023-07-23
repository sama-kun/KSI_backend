import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class SearchItemDto extends PartialType(SearchQueryDto) {
  sort?: Partial<Prisma.ItemCreateInput>;
}
