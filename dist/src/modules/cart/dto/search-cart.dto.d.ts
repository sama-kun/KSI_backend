import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartEntity } from '@/database/entities/cart.entity';
declare const SearchCartDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto & CartEntity>>;
export declare class SearchCartDto extends SearchCartDto_base {
    sort?: Partial<CartEntity>;
    filter?: Partial<CartEntity>;
    search?: Partial<CartEntity>;
}
export {};
