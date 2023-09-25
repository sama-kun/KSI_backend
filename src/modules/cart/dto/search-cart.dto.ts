import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
import { CartEntity } from '@/database/entities/cart.entity';

export class SearchCartDto extends PartialType(
  IntersectionType(CartItemEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: CartEntity })
  sort?: Partial<CartItemEntity>;

  @ApiPropertyOptional({ type: CartEntity })
  filter?: Partial<CartItemEntity>;

  @ApiPropertyOptional({ type: CartEntity })
  search?: Partial<CartItemEntity>;
}
