import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ItemGroupEntity } from '@/database/entities/item-group.entity';
declare const SearchItemGroupDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto>>;
export declare class SearchItemGroupDto extends SearchItemGroupDto_base {
    sort?: Partial<ItemGroupEntity>;
}
export {};
