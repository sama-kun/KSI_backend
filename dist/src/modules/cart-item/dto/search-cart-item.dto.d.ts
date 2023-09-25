import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
declare const SearchCartItemDto_base: import("@nestjs/common").Type<Partial<CartItemEntity & SearchQueryDto>>;
export declare class SearchCartItemDto extends SearchCartItemDto_base {
    sort?: Partial<CartItemEntity>;
    filter?: Partial<CartItemEntity>;
    search?: Partial<CartItemEntity>;
}
export {};
