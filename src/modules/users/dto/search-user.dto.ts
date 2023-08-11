import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { IntersectionType, PartialType } from '@nestjs/swagger';
import { GetUserDto } from './get-user.dto';

export class SearchUserDto extends PartialType(
  IntersectionType(GetUserDto, SearchQueryDto),
) {
  sort?: GetUserDto;
}
