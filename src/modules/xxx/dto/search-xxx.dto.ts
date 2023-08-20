import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
// @ts-ignore
import { XxxEntity } from '@/database/entities/xxx.entity';
import { IntersectionType, PartialType } from '@nestjs/swagger';

export class SearchXxxDto extends PartialType(
  IntersectionType(XxxEntity, SearchQueryDto),
) {}
