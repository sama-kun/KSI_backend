import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ItemEntity } from '@/database/entities/item.entity';
declare const SearchItemDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto & ItemEntity>>;
export declare class SearchItemDto extends SearchItemDto_base {
    sort?: Partial<ItemEntity>;
    filter?: Partial<ItemEntity>;
    search?: Partial<ItemEntity>;
}
export {};
