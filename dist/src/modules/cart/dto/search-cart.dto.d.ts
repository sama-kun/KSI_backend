import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CartEntity } from '@/database/entities/cart.entity';
declare const SearchCartDto_base: import("@nestjs/common").Type<Partial<CartEntity & SearchQueryDto>>;
export declare class SearchCartDto extends SearchCartDto_base {
    sort?: Partial<CartEntity>;
}
export {};
