import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartItemEntity } from '@/database/entities/cart-item.entity';

export class SearchCartDto extends PartialType(
  IntersectionType(CartItemEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: CartItemEntity })
  sort?: Partial<CartItemEntity>;

  @ApiPropertyOptional({ type: CartItemEntity })
  filter?: Partial<CartItemEntity>;

  @ApiPropertyOptional({ type: CartItemEntity })
  search?: Partial<CartItemEntity>;
}
