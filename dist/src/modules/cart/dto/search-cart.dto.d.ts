import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartItemEntity } from '@/database/entities/cart-item.entity';
declare const SearchCartDto_base: import("@nestjs/common").Type<Partial<CartItemEntity & SearchQueryDto>>;
export declare class SearchCartDto extends SearchCartDto_base {
    sort?: Partial<CartItemEntity>;
    filter?: Partial<CartItemEntity>;
    search?: Partial<CartItemEntity>;
}
export {};
