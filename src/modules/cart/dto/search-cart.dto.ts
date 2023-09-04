import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartEntity } from '@/database/entities/cart.entity';

export class SearchCartDto extends PartialType(
  IntersectionType(CartEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: CartEntity })
  sort?: Partial<CartEntity>;

  @ApiPropertyOptional({ type: CartEntity })
  filter?: Partial<CartEntity>;

  @ApiPropertyOptional({ type: CartEntity })
  search?: Partial<CartEntity>;
}
