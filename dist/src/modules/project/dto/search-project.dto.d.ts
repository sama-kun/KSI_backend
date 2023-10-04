import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ProjectEntity } from '@/database/entities/project.entity';
declare const SearchProjectDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto & ProjectEntity>>;
export declare class SearchProjectDto extends SearchProjectDto_base {
    sort?: Partial<ProjectEntity>;
    filter?: Partial<ProjectEntity>;
    search?: Partial<ProjectEntity>;
}
export {};
