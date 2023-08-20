import { IntersectionType, PartialType } from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartEntity } from '@/database/entities/cart.entity';

export class SearchCartDto extends PartialType(
  IntersectionType(CartEntity, SearchQueryDto),
) {
  sort?: Partial<CartEntity>;
}
