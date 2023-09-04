import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { CategoryEntity } from '@/database/entities/category.entity';
declare const SearchCategoryDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto & CategoryEntity>>;
export declare class SearchCategoryDto extends SearchCategoryDto_base {
    sort?: Partial<CategoryEntity>;
    filter?: Partial<CategoryEntity>;
    search?: Partial<CategoryEntity>;
}
export {};
