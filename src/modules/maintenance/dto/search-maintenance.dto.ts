import { SearchQueryDto } from '@/common/base/dto/search-query.dto';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import {
  ApiPropertyOptional,
  IntersectionType,
  PartialType,
} from '@nestjs/swagger';

export class SearchMaintenanceDto extends PartialType(
  IntersectionType(MaintenanceEntity, SearchQueryDto),
) {
  @ApiPropertyOptional({ type: MaintenanceEntity })
  sort?: Partial<MaintenanceEntity>;

  @ApiPropertyOptional({ type: MaintenanceEntity })
  filter?: Partial<MaintenanceEntity>;

  @ApiPropertyOptional({ type: MaintenanceEntity })
  search?: Partial<MaintenanceEntity>;
}
