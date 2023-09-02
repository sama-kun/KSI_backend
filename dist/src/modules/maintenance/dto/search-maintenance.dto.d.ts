import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
declare const SearchMaintenanceDto_base: import("@nestjs/common").Type<Partial<SearchQueryDto & MaintenanceEntity>>;
export declare class SearchMaintenanceDto extends SearchMaintenanceDto_base {
}
export {};