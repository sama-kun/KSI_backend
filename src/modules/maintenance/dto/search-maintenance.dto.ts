import { SearchQueryDto } from '@/common/base/dto/search-query.dto';

import { MaintenanceEntity } from '@/database/entities/maintenance.entity';
import { IntersectionType, PartialType } from '@nestjs/swagger';

export class SearchMaintenanceDto extends PartialType(
  IntersectionType(MaintenanceEntity, SearchQueryDto),
) {}
