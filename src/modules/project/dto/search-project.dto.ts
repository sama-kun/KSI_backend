import { IntersectionType, PartialType } from '@nestjs/swagger';
import { SearchQueryDto } from '@/common/base/dto/search-query.dto';
import { ProjectEntity } from '@/database/entities/project.entity';

export class SearchProjectDto extends PartialType(
  IntersectionType(ProjectEntity, SearchQueryDto),
) {
  sort?: ProjectEntity;
}
